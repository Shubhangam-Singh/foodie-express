import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext';
import './Verify.css'
import { toast } from 'react-toastify';

const Verify = () => {
  const { url } = useContext(StoreContext)
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success")
  const orderId = searchParams.get("orderId")
  const [verificationStatus, setVerificationStatus] = useState('loading'); // loading, success, error

  const navigate = useNavigate();

  const verifyPayment = async () => {
    try {
      const response = await axios.post(url + "/api/order/verify", { success, orderId });
      if (response.data.success) {
        setVerificationStatus('success');
        toast.success("Payment verified successfully!");
        setTimeout(() => {
          navigate("/myorders");
        }, 2000);
      } else {
        setVerificationStatus('error');
        toast.error("Payment verification failed");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      setVerificationStatus('error');
      toast.error("Something went wrong");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }

  useEffect(() => {
    verifyPayment();
  }, [])

  return (
    <div className='verify'>
      <div className="verify-container shimmer">
        {verificationStatus === 'loading' && (
          <>
            <div className="spinner"></div>
            <div className="verify-text">
              <h2>Verifying Payment</h2>
              <p>Please wait while we confirm your payment...</p>
              <div className="loading-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </>
        )}

        {verificationStatus === 'success' && (
          <div className="verify-success">
            <div className="verify-icon">✓</div>
            <div className="verify-text">
              <h2>Payment Successful!</h2>
              <p>Your order has been confirmed. Redirecting to orders...</p>
            </div>
          </div>
        )}

        {verificationStatus === 'error' && (
          <div className="verify-error">
            <div className="verify-icon">✕</div>
            <div className="verify-text">
              <h2>Verification Failed</h2>
              <p>Unable to verify payment. Redirecting to home...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Verify
