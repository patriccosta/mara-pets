import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function MaraPetsApp() {
  const [clients, setClients] = useState([]);
  const [newClient, setNewClient] = useState({ name: "", pet: "" });

  const handleAddClient = () => {
    if (newClient.name && newClient.pet) {
      setClients([...clients, newClient]);
      setNewClient({ name: "", pet: "" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-purple-800 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Mara Pets - Gestão Clínica</h1>

      <Card className="mb-6">
        <CardContent className="grid gap-4 p-4">
          <h2 className="text-xl font-semibold">Cadastro de Cliente e Pet</h2>
          <Input
            placeholder="Nome do Tutor"
            value={newClient.name}
            onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
          />
          <Input
            placeholder="Nome do Pet"
            value={newClient.pet}
            onChange={(e) => setNewClient({ ...newClient, pet: e.target.value })}
          />
          <Button onClick={handleAddClient}>Cadastrar</Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-4">Clientes Cadastrados</h2>
          <ul className="list-disc pl-5">
            {clients.map((client, index) => (
              <li key={index}>
                {client.name} - Pet: {client.pet}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
