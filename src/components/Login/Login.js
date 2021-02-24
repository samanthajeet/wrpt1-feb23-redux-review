import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../redux/reducers/userReducer';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            profileImg: '',
        }
    }

    handleChange = (prop, val) => {
        this.setState({
            [prop]: val
        })
    }

    handleLogin = () => {
        const { name, profileImg } = this.state;
        this.props.updateUser({ name, profileImg  })
    }

    render() {
        console.log('this.props.user', this.props.user)
        return (
            <section>
                {this.props.user.user.name ? (
                    <section>
                        <h1>{this.props.user.user.name}</h1>
                        <img alt={this.props.user.user.name} src={this.props.user.user.profileImg}/>
                    </section>
                ): (
                    <section>
                        <h1>
                            Login
                        </h1>
                        <input onChange={e => this.handleChange(e.target.name, e.target.value)} placeholder="name" name= "name"
                        type="text" />
                        <input onChange={e => this.handleChange(e.target.name, e.target.value)} placeholder="image" name="profileImg" type="text" />
                        <button onClick={this.handleLogin}>log in</button>
                    </section>
                )}
            </section>
        )
    }
}

function mapStateToProps(reduxState) {
    return {
        user: reduxState.user
    }
}

const mapDispatchToProps = {
    updateUser: updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);