import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function MaraPetsApp() {
  const [clients, setClients] = useState([]);
  const [newClient, setNewClient] = useState({ name: "", pet: "" });
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({ date: "", time: "", reason: "" });
  const [financialRecords, setFinancialRecords] = useState([]);
  const [newRecord, setNewRecord] = useState({ type: "entrada", description: "", amount: "" });
  const [vaccines, setVaccines] = useState([]);
  const [newVaccine, setNewVaccine] = useState({ pet: "", vaccine: "", date: "", nextDose: "" });
  const [stockItems, setStockItems] = useState([]);
  const [newStockItem, setNewStockItem] = useState({ name: "", quantity: "" });
  const [medicalRecords, setMedicalRecords] = useState([]);
  const [newMedicalRecord, setNewMedicalRecord] = useState({ pet: "", date: "", notes: "" });

  const handleAddClient = () => {
    if (newClient.name && newClient.pet) {
      setClients([...clients, newClient]);
      setNewClient({ name: "", pet: "" });
    }
  };

  const handleAddAppointment = () => {
    if (newAppointment.date && newAppointment.time && newAppointment.reason) {
      setAppointments([...appointments, newAppointment]);
      setNewAppointment({ date: "", time: "", reason: "" });
    }
  };

  const handleAddRecord = () => {
    if (newRecord.description && newRecord.amount) {
      setFinancialRecords([...financialRecords, newRecord]);
      setNewRecord({ type: "entrada", description: "", amount: "" });
    }
  };

  const handleAddVaccine = () => {
    if (newVaccine.pet && newVaccine.vaccine && newVaccine.date) {
      setVaccines([...vaccines, newVaccine]);
      setNewVaccine({ pet: "", vaccine: "", date: "", nextDose: "" });
    }
  };

  const handleAddStockItem = () => {
    if (newStockItem.name && newStockItem.quantity) {
      setStockItems([...stockItems, newStockItem]);
      setNewStockItem({ name: "", quantity: "" });
    }
  };

  const handleAddMedicalRecord = () => {
    if (newMedicalRecord.pet && newMedicalRecord.date && newMedicalRecord.notes) {
      setMedicalRecords([...medicalRecords, newMedicalRecord]);
      setNewMedicalRecord({ pet: "", date: "", notes: "" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-purple-800 p-6 space-y-10">
      <h1 className="text-3xl font-bold text-center">Mara Pets - Gestão Clínica</h1>

      {/* Cadastro de Cliente e Pet */}
      <Card>
        <CardContent className="grid gap-4 p-4">
          <h2 className="text-xl font-semibold">Cadastro de Cliente e Pet</h2>
          <Input placeholder="Nome do Tutor" value={newClient.name} onChange={(e) => setNewClient({ ...newClient, name: e.target.value })} />
          <Input placeholder="Nome do Pet" value={newClient.pet} onChange={(e) => setNewClient({ ...newClient, pet: e.target.value })} />
          <Button onClick={handleAddClient}>Cadastrar</Button>
        </CardContent>
      </Card>

      {/* Lista de Clientes */}
      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-4">Clientes Cadastrados</h2>
          <ul className="list-disc pl-5">
            {clients.map((client, index) => (
              <li key={index}>{client.name} - Pet: {client.pet}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Agendamento de Consultas */}
      <Card>
        <CardContent className="grid gap-4 p-4">
          <h2 className="text-xl font-semibold">Agendamento de Consulta</h2>
          <Input placeholder="Data (ex: 2025-04-20)" value={newAppointment.date} onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })} />
          <Input placeholder="Hora (ex: 14:30)" value={newAppointment.time} onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })} />
          <Input placeholder="Motivo da consulta" value={newAppointment.reason} onChange={(e) => setNewAppointment({ ...newAppointment, reason: e.target.value })} />
          <Button onClick={handleAddAppointment}>Agendar</Button>
        </CardContent>
      </Card>

      {/* Lista de Agendamentos */}
      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-4">Consultas Agendadas</h2>
          <ul className="list-disc pl-5">
            {appointments.map((appt, index) => (
              <li key={index}>{appt.date} às {appt.time} - {appt.reason}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Controle Financeiro */}
      <Card>
        <CardContent className="grid gap-4 p-4">
          <h2 className="text-xl font-semibold">Controle Financeiro</h2>
          <select value={newRecord.type} onChange={(e) => setNewRecord({ ...newRecord, type: e.target.value })} className="border rounded p-2">
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
          <Input placeholder="Descrição" value={newRecord.description} onChange={(e) => setNewRecord({ ...newRecord, description: e.target.value })} />
          <Input placeholder="Valor (R$)" value={newRecord.amount} onChange={(e) => setNewRecord({ ...newRecord, amount: e.target.value })} />
          <Button onClick={handleAddRecord}>Registrar</Button>
        </CardContent>
      </Card>

      {/* Relatório Financeiro */}
      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-4">Relatório Financeiro</h2>
          <ul className="list-disc pl-5">
            {financialRecords.map((rec, index) => (
              <li key={index}>[{rec.type}] {rec.description} - R$ {rec.amount}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Registro de Vacinas e Exames */}
      <Card>
        <CardContent className="grid gap-4 p-4">
          <h2 className="text-xl font-semibold">Registro de Vacinas e Exames</h2>
          <Input placeholder="Nome do Pet" value={newVaccine.pet} onChange={(e) => setNewVaccine({ ...newVaccine, pet: e.target.value })} />
          <Input placeholder="Vacina ou Exame" value={newVaccine.vaccine} onChange={(e) => setNewVaccine({ ...newVaccine, vaccine: e.target.value })} />
          <Input placeholder="Data (ex: 2025-04-20)" value={newVaccine.date} onChange={(e) => setNewVaccine({ ...newVaccine, date: e.target.value })} />
          <Input placeholder="Próxima dose (opcional)" value={newVaccine.nextDose} onChange={(e) => setNewVaccine({ ...newVaccine, nextDose: e.target.value })} />
          <Button onClick={handleAddVaccine}>Registrar</Button>
        </CardContent>
      </Card>

      {/* Lista de Vacinas e Exames */}
      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-4">Vacinas e Exames Registrados</h2>
          <ul className="list-disc pl-5">
            {vaccines.map((vax, index) => (
              <li key={index}>{vax.pet} - {vax.vaccine} em {vax.date} {vax.nextDose && `| Próxima dose: ${vax.nextDose}`}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Controle de Estoque */}
      <Card>
        <CardContent className="grid gap-4 p-4">
          <h2 className="text-xl font-semibold">Controle de Estoque</h2>
          <Input placeholder="Nome do Produto" value={newStockItem.name} onChange={(e) => setNewStockItem({ ...newStockItem, name: e.target.value })} />
          <Input placeholder="Quantidade" value={newStockItem.quantity} onChange={(e) => setNewStockItem({ ...newStockItem, quantity: e.target.value })} />
          <Button onClick={handleAddStockItem}>Adicionar ao Estoque</Button>
        </CardContent>
      </Card>

      {/* Lista de Estoque */}
      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-4">Produtos em Estoque</h2>
          <ul className="list-disc pl-5">
            {stockItems.map((item, index) => (
              <li key={index}>{item.name} - Quantidade: {item.quantity}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Prontuário Médico */}
      <Card>
        <CardContent className="grid gap-4 p-4">
          <h2 className="text-xl font-semibold">Prontuário Médico</h2>
          <Input placeholder="Nome do Pet" value={newMedicalRecord.pet} onChange={(e) => setNewMedicalRecord({ ...newMedicalRecord, pet: e.target.value })} />
          <Input placeholder="Data da Consulta" value={newMedicalRecord.date} onChange={(e) => setNewMedicalRecord({ ...newMedicalRecord, date: e.target.value })} />
          <Input placeholder="Anotações do Atendimento" value={newMedicalRecord.notes} onChange={(e) => setNewMedicalRecord({ ...newMedicalRecord, notes: e.target.value })} />
          <Button onClick={handleAddMedicalRecord}>Salvar Prontuário</Button>
        </CardContent>
      </Card>

      {/* Lista de Prontuários */}
      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-4">Prontuários Registrados</h2>
          <ul className="list-disc pl-5">
            {medicalRecords.map((record, index) => (
              <li key={index}>{record.pet} - {record.date} - {record.notes}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
