import CheckoutFlow from '@/components/eden/checkout-flow';
import Layout from '@/components/layouts/layout';
import styles from './complete.module.css';
import Button1 from '@/components/buttons/btn-outline-primary';
import Button2 from '@/components/buttons/btn-fill-primary';
import Image from 'next/image';
import { formatPrice } from '@/utils/formatPrice';
import { CiCircleCheck } from 'react-icons/ci';
import { useState, useEffect } from 'react';
import { FaCircleExclamation } from 'react-icons/fa6';
import { useAuth } from '@/context/auth-context';


export default function Complete() {
  const { auth } = useAuth();
  const [orderInfo, setOrderInfo] = useState({
    orders: [],
    payment_method: '',
    shipping_method: '',
    shipping_address: '',
  });
  const totalPrice = orderInfo.orders?.reduce(
    (total, order) => total + order.price * order.quantity,
    0
  );

  useEffect(() => {
    // 從 cookie 中讀取 orderId
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get('orderId');
    const token = auth?.token;
    if (!token) {
      return;
    }
    const fetchOrder = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/cart/complete?orderId=${orderId}`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const orderData = await response.json();
        setOrderInfo(orderData);
      } catch (error) {
        console.log('無法獲取訂單資訊:', error);
      }
    };
    fetchOrder();
  }, [auth.token]);

  return (
    <Layout>
      <div className={styles.container}>
        {orderInfo && orderInfo.orders && orderInfo.orders.length > 0 ? (
          <>
            <CheckoutFlow />
            <div className={styles.main}>
              <div className={styles.check}>
                <CiCircleCheck />
                <h4>訂購完成</h4>
              </div>
              <div className={styles.content}>
                {/* 左邊商品列 */}
                <div className={styles.list}>
                  <h4>商品清單 </h4>
                  {orderInfo.orders?.map((order, index) => (
                    <div className={styles.item} key={index}>
                      <div className={styles.imageContainer}>
                        <Image
                          src={order.image}
                          alt="Product"
                          className={styles.image}
                          width={150}
                          height={150}
                        />
                      </div>
                      <div className={styles.productInfo}>
                        <div className={styles.productName}>{order.title}</div>
                        <div className={styles.sizeColor}>
                          <span className={styles.size}>
                            尺寸: {order.size}
                          </span>
                          <span className={styles.color}>
                            顏色: {order.color}
                          </span>
                        </div>
                        <div className={styles.quantityPrice}>
                          <span className={styles.quantity}>
                            數量: {order.quantity}
                          </span>
                          <span className={styles.price}>
                            單價: {formatPrice(order.price)}
                          </span>
                        </div>
                        <div className={styles.subtotal}>
                          總價: {formatPrice(order.price * order.quantity)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* 右邊總結列 */}
                <div className={styles.right}>
                  <div className={styles['info-container']}>
                    <h4>訂單資訊</h4>
                    <div className={styles.info}>
                      <h5>運送方式</h5>
                      <p>
                        {orderInfo.shipping_method === 'home' && '宅配'}{' '}
                        (運費60元)
                      </p>
                      <hr />
                      <h5>運送地址</h5>
                      <p>{orderInfo.shipping_address}</p>
                      <hr />
                      <h5>付款方式</h5>
                      <p>{orderInfo.payment_method}</p>
                      <hr />
                      <h5>消費金額</h5>
                      <p>{formatPrice(totalPrice + 60)}</p>
                    </div>
                    <div className={styles.warning}>
                      <p>
                        <FaCircleExclamation />
                        &nbsp; 退貨政策
                      </p>
                      <div className={styles.warningItem}>
                        <p>
                          &nbsp; ．商品收到日起 7
                          天(含)內，可免費退貨，無需說明理由
                        </p>
                        <p>
                          &nbsp; ．商品收到日起 7 天後，將不接受退貨，概不退費
                        </p>
                        <p>
                          &nbsp;
                          ．已使用過的潛水裝備，出於衛生與安全考量，恕不接受退貨
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <h4>訂單不存在或未驗證</h4>
        )}

        <div className={styles['btn-container']}>
          <Button1>繼續購物</Button1>
          <Button2>查看其他訂單</Button2>
        </div>
      </div>
    </Layout>
  );
}
