import React, { Component } from 'react';
import { Button, Table, Form, Col, Row, Card, ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux'
import { adminLogin, adminLogout, getProductsList } from './actionCreators'
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
    };
  }

  componentDidMount() {
    this.props.getProductsList()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.token !== null && this.props.token !== prevProps.token) {
      this.setState({ showLoginForm: false })
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

  onShowNewProduct = () => {
    this.setState((state) => ({ showNewProductForm: !state.showNewProductForm }))
  }

  renderNewProduct = () => {
    return (
      <div className="NewProductForm">
        <Card>
          <Card.Header>Administrator Login</Card.Header>

          <Form>
            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="3">
                Name
              </Form.Label>
              <Col sm="9">
                <Form.Control type="text" placeholder="" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="3">
                Description
              </Form.Label>
              <Col sm="9">
                <Form.Control as="textarea" rows="3" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="3">
                Price
              </Form.Label>
              <Col sm="9">
                <Form.Control type="text" placeholder="" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="3">
                Image url
              </Form.Label>
              <Col sm="9">
                <Form.Control type="text" placeholder="" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="3">
                Status
              </Form.Label>
              <Col sm="9">
                <Form.Check type="checkbox" label="Available" />
              </Col>
            </Form.Group>

            <Button variant="success" onClick={() => { }} style={{ margin: 20 }}>
              Save
            </Button>
            <Button variant="primary" onClick={this.onShowNewProduct} style={{ margin: 20 }}>
              Cancel
            </Button>
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
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Available</th>
              {this.props.token && <th>Edit</th>}
              {this.props.token && <th>Delete</th>}
            </tr>
          </thead>
          <tbody>
            {
              this.props.productsList.map((product, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    {this.props.token && <td>Table cell</td>}
                    {this.props.token && <td>Table cell</td>}
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </div>
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


    // if (this.props.token !== null) {
    //   if (this.state.showNewProductForm) {
    //     NewProductButton = (
    //       <Button id="createBtn" variant="primary" onClick={this.onShowNewProduct}>
    //         Close
    //       </Button>
    //     )
    //   } else {
    //     NewProductButton = (
    //       <Button id="createBtn" variant="success" onClick={this.onShowNewProduct}>
    //         New Product
    //       </Button>
    //     )
    //   }
    // }
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
        <h2>Loading...</h2>
      </div>
    )
  }

  render() {
    return (
      <div className="App" scroll="no">
        <div className="Header">
          <h1>Simple eCommerce</h1>
        </div>
        <div className="Content">
          {
            this.renderAdminButton()
          }
          {
            this.state.showLoginForm && this.renderLogin()
          }
          {
            this.state.showNewProductForm && this.renderNewProduct()
          }
          {
            (!this.state.showLoginForm && !this.state.showNewProductForm) && this.renderProductsList()
          }
        </div>
        {
          this.props.loading && this.renderLoading()
        }
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
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
