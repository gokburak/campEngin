import React, { useState } from "react";
import { useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import ProductServices from "../services/productService";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function ProductList() {

  const dispatch = useDispatch()
  const [product, setProduct] = useState([]);

  useEffect(() => {
    let productService = new ProductServices();
    productService.getProducts().then((result) => setProduct(result.data));
  }, []);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ülke Adı</Table.HeaderCell>
            <Table.HeaderCell>Başkent</Table.HeaderCell>
            <Table.HeaderCell>Nüfus</Table.HeaderCell>
            <Table.HeaderCell>Yerli Adı</Table.HeaderCell>
            <Table.HeaderCell>Bayrak</Table.HeaderCell>

          </Table.Row>
        </Table.Header>

        <Table.Body>
          {product.map((product) => (
            <Table.Row key={product.name}>
              <Table.Cell> <Link to={`/products/${product.capital} `} >{product.name}</Link> </Table.Cell>
              <Table.Cell>{product.capital}</Table.Cell>
              <Table.Cell>{product.population}</Table.Cell>
              <Table.Cell>{product.nativeName}</Table.Cell>
              <Table.Cell>
                <img
                  src={product.flag}
                  alt="ffg"
                  style={{ width: "40%" }}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
