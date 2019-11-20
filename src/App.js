import React, { Component } from 'react';
import { Button, Table, Form, Container, Col, Row, Card, ListGroup, Spinner, Image } from 'react-bootstrap';
import { connect } from 'react-redux'
import _ from 'lodash'
import { adminLogin, adminLogout, getProductsList, createProduct, deleteProduct, updateProduct } from './actionCreators'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      showLoginForm: false,
      username: '',
      password: '',

      showNewProductForm: false,
      name: '',
      desc: '',
      price: '',
      image: '',
      status: true,
      isUpdate: false,
      selectID: '',
    };
  }

  componentDidMount() {
    this.props.getProductsList()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.token !== null && this.props.token !== prevProps.token) {
      this.setState({ showLoginForm: false })
    }
    if ((this.props.productsList.length > 0) && !_.isEqual(this.props.productsList, prevProps.productsList)) {
      this.setState({
        showLoginForm: false,
        username: '',
        password: '',
        showNewProductForm: false,
        name: '',
        desc: '',
        price: '',
        image: '',
        status: true,
        isUpdate: false,
        selectID: '',
      })
    }
  }

  onShowLoginForm = () => {
    this.setState((state) => ({ showLoginForm: !state.showLoginForm, username: '', password: '' }))
  }

  onSubmitLogin = () => {
    const { username, password } = this.state
    this.props.adminLogin(username, password)
    this.setState({ username: '', password: '' })
  }

  onLogout = () => {
    this.setState({
      showLoginForm: false,
      username: '',
      password: '',
      showNewProductForm: false,
    })
    this.props.adminLogout()
  }

  onChangeUsername = (e) => {
    this.setState({ username: e.target.value })
  }

  onChangePassword = (e) => {
    this.setState({ password: e.target.value })
  }

  onShowNewProduct = (product = {}, id) => {
    if (!_.isEmpty(product)) {
      const { name, desc, price, image, status } = product
      this.setState((state) => ({
        showNewProductForm: !state.showNewProductForm,
        name,
        desc,
        price,
        image,
        status,
        isUpdate: true,
        selectID: id,
      }))
    } else {
      this.setState((state) => ({
        showNewProductForm: !state.showNewProductForm,
        name: '',
        desc: '',
        price: '',
        image: '',
        status: true,
        isUpdate: false,
        selectID: '',
      }))
    }
  }

  onDeleteProduct = (id) => {
    this.props.deleteProduct(id)
  }

  onChangeText = (e, key = '') => {
    console.log(e.target.value)
    const { value } = e.target
    this.setState({ [key]: value })
  }

  onChangeCheck = (e) => {
    const { checked } = e.target
    this.setState({ status: checked })
  }

  onSubmitNewProduct = () => {
    const { name, desc, price, image, status, isUpdate, selectID } = this.state
    const data = {
      name,
      desc,
      image,
      price,
      status
    }
    if (isUpdate) {
      this.props.updateProduct(data, selectID)
    } else {
      this.props.createProduct(data)
    }
  }

  renderNewProduct = () => {
    return (
      <div className="NewProductForm">
        <Card>
          <Card.Header>Administrator Login</Card.Header>

          <Form>
            <div id="productForm">
              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="3">
                  Name
              </Form.Label>
                <Col sm="9">
                  <Form.Control type="text" placeholder="" value={this.state.name} onChange={(e) => this.onChangeText(e, 'name')} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="3">
                  Description
              </Form.Label>
                <Col sm="9">
                  <Form.Control as="textarea" rows="3" value={this.state.desc} onChange={(e) => this.onChangeText(e, 'desc')} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="3">
                  Price
              </Form.Label>
                <Col sm="9">
                  <Form.Control type="text" placeholder="" value={this.state.price} onChange={(e) => this.onChangeText(e, 'price')} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="3">
                  Image url
              </Form.Label>
                <Col sm="9">
                  <Form.Control type="text" placeholder="" value={this.state.image} onChange={(e) => this.onChangeText(e, 'image')} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="3">
                  Status
              </Form.Label>
                <Col sm="9">
                  <Form.Check type="checkbox" label="Available" checked={this.state.status} onChange={this.onChangeCheck} />
                </Col>
              </Form.Group>

              <Button variant="success" onClick={this.onSubmitNewProduct} style={{ margin: 20 }}>
                Save
            </Button>
              <Button variant="primary" onClick={this.onShowNewProduct} style={{ margin: 20 }}>
                Cancel
            </Button>
            </div>
          </Form>
        </Card>
      </div>
    )
  }

  renderLogin = () => {
    return (
      <div className="LoginForm">
        <Card>
          <Card.Header>Administrator Login</Card.Header>
          <ListGroup variant="flush" style={{ padding: 10 }}>
            <Form>
              <Form.Group controlId="formBasicUsername">
                <Form.Control placeholder="Username" value={this.state.username} onChange={this.onChangeUsername} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.onChangePassword} />
              </Form.Group>
              {
                this.props.error && <p id="errorMessage">{this.props.error}</p>
              }
              <Button variant="success" onClick={this.onSubmitLogin} style={{ margin: 20 }}>
                Login
              </Button>
              <Button variant="primary" onClick={this.onShowLoginForm} style={{ margin: 20 }}>
                Close
              </Button>
            </Form>
          </ListGroup>
        </Card>
      </div>
    )
  }

  renderProductsList = () => {
    return (
      <div className="renderProductsList">
        {
          this.props.productsList.map(this.renderProduct)
        }
      </div>
    )
  }

  renderProduct = (product, index) => {
    const { _id, name, desc, image, price, status } = product
    const isAdmin = this.props.token !== null
    const _price = (price && price !== '') ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ''

    return (
      <Card key={_id} style={{ maxWidth: 700 }}>
        <Row>
          <Col md={5}>
            {
              (image !== '')
                ? <Image id="productImage" style={{ width: 240, height: 180, margin: 10, backgroundColor: 'silver' }} src={image} rounded />
                : <div style={{ width: 240, height: 180, margin: 10, backgroundColor: 'silver', borderRadius: 4 }}></div>
            }
          </Col>
          <Col style={{ padding: 20 }}>
            <Row><h3>{name}</h3></Row>
            <Row><p style={{ maxWidth: 360, overflow: 'hidden', textOverflow: 'ellipsis' }}>{desc}</p></Row>
            <Row>
              <Col><p style={{ color: '#FF7733' }}>Price: {_price}</p></Col>
              <Col><p style={{ color: status ? '#7EDF46' : '#F7E833' }}>Product is {status ? 'Available' : 'Unavailable'}</p></Col>
            </Row>
            {
              isAdmin && (
                <Row>
                  <Button variant="warning" onClick={() => this.onShowNewProduct(product, _id)} style={{ margin: 20 }}>
                    Update Product
                  </Button>
                  <Button variant="danger" onClick={() => this.onDeleteProduct(_id)} style={{ margin: 20 }}>
                    Delete Product
                  </Button>
                </Row>
              )
            }
          </Col>
        </Row>
      </Card>
    )
  }

  renderAdminButton = () => {
    let AuthButton
    let NewProductButton
    if (!this.state.showLoginForm && !this.state.showNewProductForm) {
      if (this.props.token === null) {
        AuthButton = (
          <Button id="loginBtn" variant="primary" onClick={this.onShowLoginForm}>
            Admin Login
          </Button>
        )
      } else {
        AuthButton = (
          <Button id="loginBtn" variant="danger" onClick={this.onLogout}>
            Logout
          </Button>
        )
      }
    }

    if (!this.state.showNewProductForm && this.props.token !== null) {
      NewProductButton = (
        <Button id="createBtn" variant="success" onClick={this.onShowNewProduct}>
          New Product
        </Button>
      )
    }
    return (
      <div>
        {NewProductButton}
        {AuthButton}
      </div>
    )
  }

  renderLoading = () => {
    return (
      <div className="Loading">
        <Spinner animation="border" variant="primary" />
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <h1>Simple eCommerce</h1>
        </div>
        <div className="Content">
          {this.renderAdminButton()}
          {this.state.showLoginForm && this.renderLogin()}
          {this.state.showNewProductForm && this.renderNewProduct()}
          {(!this.state.showLoginForm && !this.state.showNewProductForm) && this.renderProductsList()}
        </div>
        {this.props.loading && this.renderLoading()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  loading: state.loading,
  productsList: state.products,
  error: state.error,
  token: state.token,
})

const mapDispatchToProps = ({
  adminLogin,
  adminLogout,
  getProductsList,
  createProduct,
  deleteProduct,
  updateProduct,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
