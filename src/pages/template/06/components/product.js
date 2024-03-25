import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../data/data";
import { Button, Col, Input, Row } from "antd";
import { useRecoilState } from "recoil";
import { cartItems } from "../state/index";

export default function Product() {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useRecoilState(cartItems);
  const params = useParams();
  const dataProId = data.find(
    (data) => data.id.toString() === params.productId
  );
  const addToCart = (productId, quantity) => {
    setCart({ cartItems: [dataProId, quantity] });
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);
  return (
    <div style={{ width: 800, margin: " 0 auto", paddingTop: 50 }}>
      <Row style={{ alignItems: "center" }}>
        <Col span={6}>
          <img src={dataProId.image} width={200} />
        </Col>
        <Col span={18}>
          <div>{dataProId.name}</div>
          <label htmlFor="quantity">Quantity:</label>
          <Input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <Button onClick={addToCart}>Thêm vào giỏ</Button>
        </Col>
      </Row>
    </div>
  );
}
