import { useState } from "react";
import Head from "next/head";

import { Heading, Input, Button, Spacer } from "@brandovidal/components";

export default function Home() {
  const [formValues, setFormValues] = useState({});

  const onChanges = (key) => (event) => {
    const { value } = event.target;
    setFormValues({ ...formValues, [key]: value });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        height: "100%",
        textAlign: "center",
      }}
    >
      <Heading size="xl">Cuentame sobre ti</Heading>
      <Spacer.Horizontal size="md" />
      <Input
        value={formValues.name}
        onChange={onChanges("name")}
        placeholder="Nombres"
      />
      <Spacer.Horizontal size="sm" />
      <Input
        value={formValues.lastname}
        onChange={onChanges("lastname")}
        placeholder="Apellido"
      />
      <Spacer.Horizontal size="sm" />
      <Input
        value={formValues.email}
        onChange={onChanges("email")}
        placeholder="Correo electronico"
      />
      <Spacer.Horizontal size="lg" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Button type="primary">Completa tu perfil</Button>
        <Spacer.Horizontal size="md" />
        <Button type="tertiary">Saltar este paso por ahora</Button>
      </div>
    </div>
  );
}
