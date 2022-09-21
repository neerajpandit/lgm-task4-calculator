import React, { useState } from "react";

const Calculator = () => {

    const [val, setValue] = useState("");
    const backspace = () => {
        try {
            setValue(val.slice(0, -1));
        }
        catch(error) {
            setValue("");
        }
    }
    const Calculate = () => {
        try {
            setValue(eval(val));
        } catch (error) {
            setValue("Error");   
        }
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="display fw-bolder text-center text-primary">Calculator</h1>
                        <hr/>
                    </div>
                </div>
                <div className="row justify-content-center ">
                    <div className="col-md-4 ">
                        <div className="card border-primary mb-3" >
                    <div className="card-body text-primary">
                        <input type="text" className="form-control form-control-lg mb-4
                        text-center bg-light fs-3 text-primary shadow"placeholder="Your Ans:" value={val} />
                                <div className="row my-3">
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary shadow p-4 fs-4  "  value="1"
                                            onClick={(e) => setValue(val + e.target.value)} >1</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary shadow p-4 fs-4 " value="2"
                                            onClick={(e) => setValue(val + e.target.value)} >2</button>
                                    </div><div className="col-3">
                                        <button className="btn btn-light text-primary shadow p-4 fs-4" value="3"
                                            onClick={(e) => setValue(val + e.target.value)} >3</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary shadow py-4 px-2 fs-4 bg-danger" value="C"
                                            onClick={() => backspace()} >C/CE</button>
                                    </div>
                                </div>

                                <div className="row my-3">
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary shadow p-4 fs-4 " value="4"
                                            onClick={(e) => setValue(val + e.target.value)} >4</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary shadow p-4 fs-4 " value="5"
                                            onClick={(e) => setValue(val + e.target.value)} >5</button>
                                    </div><div className="col-3">
                                        <button className="btn btn-light text-primary shadow p-4 fs-4" value="6"
                                            onClick={(e) => setValue(val + e.target.value)} >6</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary shadow p-4  fs-4 " value="/"
                                            onClick={(e) => setValue(val + e.target.value)} >/</button>
                                    </div>
                                </div>
                                
                                <div className="row my-3">
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary shadow p-4 fs-4 " value="7"
                                            onClick={(e) => setValue(val + e.target.value)} >7</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary shadow p-4 fs-4 " value="8"
                                            onClick={(e) => setValue(val + e.target.value)} >8</button>
                                    </div><div className="col-3">
                                        <button className="btn btn-light text-primary shadow p-4 fs-4" value="9"
                                            onClick={(e) => setValue(val + e.target.value)} >9</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary shadow p-4  fs-4 " value="+"
                                            onClick={(e) => setValue(val + e.target.value)} >+</button>
                                    </div>
                                </div>

                                <div className="row my-3">
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary shadow p-4 fs-4 " value="."
                                            onClick={(e) => setValue(val + e.target.value)} >.</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary shadow p-4 fs-4 " value="0"
                                            onClick={(e) => setValue(val + e.target.value)} >0</button>
                                    </div><div className="col-3">
                                        <button className="btn btn-light text-primary shadow p-4 fs-4 bg-info " value="=" id="equal"
                                            onClick={() => Calculate()} >=</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary shadow p-4  fs-4 " value="-"
                                            onClick={(e) => setValue(val + e.target.value)} >-</button>
                                    </div>
                                </div>
                                
                    </div>
                    </div>
                    
                    </div>
                </div>
        </div>
    </div> 
    );
}
export default Calculator;