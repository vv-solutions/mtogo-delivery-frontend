import {Button, Form} from "react-bootstrap";
import {useState} from "react";

export default function Login({setIsLoggedIn}) {
    const [supplierId, setSupplierId] = useState('');


    const handleLogin = () => {
        if(supplierId > 0){
            setIsLoggedIn(true)
            localStorage.setItem("supplierId",supplierId);
        }
    };

    return (
        <div className="login-container">
        <Form onSubmit={handleLogin}>
            <Form.Group controlId="formSupplierId">
                <Form.Label>Supplier ID</Form.Label>
                <input
                    name="formSupplierId"
                    type="number"
                    required={true}
                    placeholder="Enter Supplier ID"
                    value={supplierId}
                    onChange={(e) => setSupplierId(e.target.value)}
                    data-testid="formSupplierIdInput"
                />
            </Form.Group>

            <Button variant="primary" type={"submit"} id={"submitLogin"} className="login-button mt-3">
                Login
            </Button>
        </Form>
    </div>
    )

}
