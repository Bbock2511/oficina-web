"use client"

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ImcCalculator = () => {
    const searchParams = useSearchParams();
    const name = searchParams.get("name");

    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();

    const [imc, setImc] = useState(0);
    const [status, setStatus] = useState();

    const calcular = (peso, altura) => {
        if (peso && altura) {
            let convertedHeight = altura / 100;
            let result = peso / (convertedHeight * convertedHeight);
            setImc(result.toFixed(1));
            if (result <= 16) {
                setStatus("Desnutrição severa");
            }
            if (result > 16.1 && result <= 18.4) {
                setStatus("Desnutrição moderada");
            }
            if (result >= 18.5 && result <= 22) {
                setStatus("Peso baixo");
            }
            if (result > 22 && result < 25) {
                setStatus("Peso normal");
            }
            if (result >= 25 && result < 30) {
                setStatus("Sobrepeso")
            }
            if (result >= 30 && result < 35) {
                setStatus("Obesidade grau I")
            }
            if (result >= 35 && result < 40) {
                setStatus("Obesidade grau II")
            }
            if (result >= 40) {
                setStatus("Obesidade mórbida")
            }
            return;
        }
        return;
    }

    useEffect(() => {
        console.log(`Peso: ${peso}\nAltura: ${altura}`);
    }, [peso, altura])

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            height: '100vh', // altura total da viewport
            width: '100vw',  // largura total da viewport
            textAlign: 'center',
            gap: 10
        }}>
            {
                name ? (
                    <p>Parabéns {name}, você encontrou a calculadorade IMC<br />Você é mesmo incrível</p>
                ) : (
                    <p>
                        Parabéns, você encontrou a calculadora de IMC<br />Isso é incrível
                    </p>
                )
            }
            <p>Peso(Kg)</p>
            <input
                type="number"
                inputMode="numeric"
                placeholder="Peso"
                onChange={event => setPeso(event.target.value)}
            />
            <p>Altura(cm)</p>
            <input
                type="number"
                inputMode="numeric"
                placeholder="Altura"
                onChange={event => setAltura(event.target.value)}
            />

            <button
                style={{
                    width: 100,
                    height: 40,
                    borderRadius: 10
                }}
                disabled={(peso && altura) && (peso != 0 && altura != 0) ? false : true}
                onClick={() => calcular(peso, altura)}
            >
                Calcular!
            </button>
            {
                imc !== 0 && (
                    <>
                        <p>IMC: {imc}</p>
                        <p>Grau: {status}</p>
                    </>
                )
            }
        </div>
    )
}

export default ImcCalculator;