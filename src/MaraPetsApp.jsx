import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

export default function MaraPetsApp() {
  const [clients, setClients] = useState([]);
  const [newClient, setNewClient] = useState({ name: "", pet: "" });

  const addClient = async () => {
    if (!newClient.name || !newClient.pet) return;
    await addDoc(collection(db, "clients"), newClient);
    setNewClient({ name: "", pet: "" });
  };

  useEffect(() => {
    const q = query(collection(db, "clients"), orderBy("name"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setClients(list);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-white text-purple-800 p-6 space-y-10">
      <h1 className="text-3xl font-bold text-center">Mara Pets - Firebase</h1>

      <Card>
        <CardContent className="grid gap-4 p-4">
          <h2 className="text-xl font-semibold">Cadastro de Cliente e Pet</h2>
          <Input
            placeholder="Nome do Tutor"
            value={newClient.name}
            onChange={(e) =>
              setNewClient({ ...newClient, name: e.target.value })
            }
          />
          <Input
            placeholder="Nome do Pet"
            value={newClient.pet}
            onChange={(e) =>
              setNewClient({ ...newClient, pet: e.target.value })
            }
          />
          <Button onClick={addClient}>Cadastrar</Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-4">Clientes Cadastrados</h2>
          <ul className="list-disc pl-5">
            {clients.map((client) => (
              <li key={client.id}>
                {client.name} - Pet: {client.pet}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
