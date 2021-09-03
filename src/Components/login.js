// import { getDefaultNormalizer } from '@testing-library/dom'
import React, { useState } from 'react'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import Home from './Home';
import { useHistory } from "react-router-dom";
import '../css/style.css'

export const Login = () => {

    var z = JSON.parse(localStorage.getItem("test"))



    const [data, setData] = useState({
        Name: "",
        Password: "",
    })
    let history = useHistory();

    const handleSubmit = e => {
        console.log("z", z)
        console.log("data", data);

        setData({
            Name: "",
            Password: ""
        })

        // z.filter(z => {
        //     if (z.Name == data.Name && z.Password == data.Password) {
        //         

        //         //  console.log("Hello");
        //     }
        //     else {
        //         alert("Wrong Credentials!")
        //     }
        //     console.log("Bye",z);
        // })
        const ddd = z.filter(z => z.Name == data.Name && z.Password == data.Password)
        console.log("dd", ddd)
        if (ddd.length>0) {
            history.push("/home");
            alert("Successfully Login")
        } else {
            alert("Wrong Credentials!")
        }
    }

    // console.log("data1",state.Data);

    const eventChange = e => {
        setData({ ...data, Name: e.target.value })
    }
    const eventChange1 = e => {
        setData({ ...data, Password: e.target.value })

    }

    return (
        // <>
        //     <h1> Login! </h1>
        //     <label> Name: </label>
        //     <input type="text" value={data.Name} onChange={eventChange} />
        //     <br />
        //     <label> Password: </label>
        //     <input type="password" value={data.Password} onChange={eventChange1} />
        //     <br />
        //     <br />
        //     <button type="submit" class="btn btn-success" onClick={(e) => handleSubmit(e)}> Login!! </button>
        //     <h2> Already a User? <button type="submit" class="btn btn-warning"> <Link to="/home"> Home </Link> </button> </h2>

        //     <br />
        //     <br />
            // <Home />

    
	<section class="w3l-forms-23">
		<div class="forms23-block-hny">
			<div class="wrapper">
				<h1>Login Page!</h1>
				<div class="d-grid forms23-grids">
					<div class="form23">
						<div class="main-bg">
							<h6 class="sec-one">Muhammed Teli</h6>
							<div class="speci-login first-look">
								<img src="images/user.png" alt="" class="img-responsive"/>
							</div>
						</div>
						<div class="bottom-content">
							<form action="#" method="post">
								<input type="text" class="input-form" placeholder="Your Name"
										required="required" value={data.Name} onChange={eventChange}/>
								<input type="password" name="password" class="input-form"
										placeholder="Your Password" required="required"  value={data.Password} onChange={eventChange1}/>
								<button type="submit"  class="loginhny-btn btn"onClick={(e) => handleSubmit(e)}>Login</button>
							</form>
							<p>Not a member yet? <Link to="/">Join Now!</Link></p>
						</div>
					</div>
				</div>
				</div>
			</div>
		
	</section>

    )
}

export default Login    