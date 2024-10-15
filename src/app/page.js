"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const [name, setName] = useState("");
  const [pressed, setPressed] = useState(false);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <input
          value={name}
          onChange={event => setName(event.target.value)}
          placeholder="Name"
          style={{ height: 30, justifyContent: 'center', width: 'auto' }}
        />
        <button
          title="Clique Aqui"
          disabled={name.trim() === "" ? true : false}
          onClick={() => setPressed(!pressed)}
          style={{ height: 50 }}
        >
          Clique aqui
        </button>
        {
          pressed ? (
            <p>Bem vindo, {name}</p>
          ) : null
        }
      </main>
      <footer className={styles.footer}>
        <Link href={{ pathname: '/imc', query: { name: name } }}>
          IMC
        </Link>
        <Link href={'/calculadora'}>
          Calculadora
        </Link>
      </footer>
    </div>
  );
}
