"use client"

import React, { useState } from "react";

const Calculator = () => {
    const [display, setDisplay] = useState("");

    const handleClick = (value) => {
        setDisplay((prev) => prev + value);
    };

    const handleClear = () => {
        setDisplay("");
    };

    const handleBackspace = () => {
        setDisplay((prev) => prev.slice(0, -1));
    };

    const handleEquals = () => {
        try {
            setDisplay(eval(display).toString()); // Usando eval para simplificar, mas cuidado com segurança.
        } catch (error) {
            setDisplay("Erro");
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '100vw'
        }}>
            <div style={{
                width: 220,
                height: 50,
                padding: 10,
                border: '1px solid #ccc',
                marginBottom: 10,
                fontSize: 24,
                textAlign: 'right',
                backgroundColor: 'grey',
            }}>
                {display}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                <div style={{ display: 'flex', gap: 5 }}>
                    <button
                        onClick={handleClear}
                        style={{ padding: 10, fontSize: 18, flex: 1 }}
                    >
                        C
                    </button>
                    <button
                        onClick={handleBackspace}
                        style={{ padding: 10, fontSize: 18, flex: 1 }}
                    >
                        ←
                    </button>
                </div>
                <div style={{ display: 'flex', gap: 5 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 5, flex: 3 }}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                            <button
                                key={num}
                                onClick={() => handleClick(num.toString())}
                                style={{ padding: 10, fontSize: 18 }}
                            >
                                {num}
                            </button>
                        ))}
                        <div></div>
                        <button
                            onClick={() => handleClick("0")}
                            style={{ padding: 10, fontSize: 18 }}
                        >
                            0
                        </button>
                        <div></div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 5, flex: 1 }}>
                        {["+", "-", "*", "/"].map((op) => (
                            <button
                                key={op}
                                onClick={() => handleClick(op)}
                                style={{ padding: 10, fontSize: 18 }}
                            >
                                {op}
                            </button>
                        ))}
                    </div>
                </div>
                <button
                    onClick={handleEquals}
                    style={{ padding: 10, fontSize: 18, marginTop: 5 }}
                >
                    =
                </button>
            </div>
        </div>
    );
};

export default Calculator;
