import Head from "next/head";

import { Heading, Input, Button } from "@brandovidal/components";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Heading>Cuentame sobre ti</Heading>
      <Input placeholder="Nombres" />
      <Input placeholder="Apellido" />
      <Input placeholder="Correo electronico" />
      <Button type="primary">Completa tu perfil</Button>
      <Button type="tertiary">Saltar este paso por ahora</Button>
    </div>
  );
}
