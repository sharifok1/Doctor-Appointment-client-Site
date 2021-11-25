
import { CircularProgress } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheackOutForm = ({appointment}) => {
  const {price,email,patientName, _id}=appointment;
  const [error, setError]=useState('');
  const [success, setSuccess] = useState('');
  const [processing, setProcessing] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret,setClientSecret] = useState('');
    useEffect(()=>{
      const url='http://localhost:3010/create-payment-intent';
      fetch(url,{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify({price})
      })
      .then(res => res.json())
      .then(data=>{
        setClientSecret(data.clientSecret)
      })
    },[price])


    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
    
        if (!stripe || !elements) {
          return;
        }
        const card =  elements.getElement(CardElement);
       
        if (card == null) { 
          return;
        }
        // Use your card Element with other Stripe.js APIs
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card,
        });
        setProcessing(true)
    
        if (error) {
          setError(error.message);
          setSuccess('')
        } else {
          setError('')
          console.log('[PaymentMethod]', paymentMethod);
        }

        // ---------------------------payment intent
        const {paymentIntent, error:intentError,} = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: {
              card: card,
              billing_details: {
                name: patientName,
                email:email,
              },
            },
          },
        );
        if(intentError){
          setError(intentError.message)
          setSuccess('')
          setProcessing(false)
        }
        else{
          setSuccess('Your payment process successfully done');
          console.log(paymentIntent);
          setProcessing(false)
          // payment save to database

          const payment ={
            amount:paymentIntent.amount,
            transaction:paymentIntent.client_secret.slice('_secret',0),
            last4:paymentMethod.card.last4,
            brand:paymentMethod.card.brand,
          }

          const url = `http://localhost:3010/appointment/${_id}`
          fetch(url,{
            method:'PUT',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(payment)
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
          })

        }
    }


    return (
        <div>
          payable amount: ${price} <br />
          Patient email:{email}
         <form onSubmit={handleSubmit}
         style={{padding:'40px 0 40px 0', backgroundColor:'#005', margin:'auto'}}
         >
            <CardElement
                options={{
                style: {
                    base: {
                    fontSize: '25px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                    },
                    invalid: {
                    color: '#9e2146',
                    }, 
                },
                }}
                
            />
          { processing? <CircularProgress></CircularProgress> : <button type="submit" disabled={!stripe || success}
            style={{width:'20%', padding:'8px',backgroundColor:'#55f', border:'0.5px solid #011', borderRadius:'5px',color:'#fff', marginTop:'20px'}}>
                Pay ${price}
            </button>}
            {
              error &&   <p style={{color:'#f50'}}>{error}</p>
            }
            {
              success &&   <p style={{color:'#0f0'}}>{success}</p>
            }
            </form>
            
        </div>
    );
};

export default CheackOutForm;