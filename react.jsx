import { useState } from "react";

export default function App() {
  const [tickets, setTickets] = useState([
    { id: 1, title: "Login not working", status: "Open" },
    { id: 2, title: "Payment failed", status: "Pending" },
  ]);

  const [newTicket, setNewTicket] = useState("");

  const addTicket = () => {
    if (!newTicket) return;
    const ticket = {
      id: tickets.length + 1,
      title: newTicket,
      status: "Open",
    };
    setTickets([...tickets, ticket]);
    setNewTicket("");
  };

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial" }}>
      
      {/* Sidebar */}
      <div style={{
        width: "220px",
        background: "#1f2937",
        color: "white",
        padding: "20px"
      }}>
        <h2>SupportDesk</h2>
        <p>Dashboard</p>
        <p>Tickets</p>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px", background: "#f3f4f6" }}>
        <h1>Customer Support Dashboard</h1>

        {/* Add Ticket */}
        <div style={{ margin: "20px 0" }}>
          <input
            type="text"
            placeholder="Enter ticket title"
            value={newTicket}
            onChange={(e) => setNewTicket(e.target.value)}
            style={{ padding: "8px", width: "300px" }}
          />
          <button
            onClick={addTicket}
            style={{
              padding: "8px 12px",
              marginLeft: "10px",
              background: "#2563eb",
              color: "white",
              border: "none",
              cursor: "pointer"
            }}
          >
            Add Ticket
          </button>
        </div>

        {/* Ticket List */}
        <div>
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              style={{
                background: "white",
                padding: "15px",
                marginBottom: "10px",
                borderRadius: "5px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
              }}
            >
              <h3>{ticket.title}</h3>
              <p>Status: {ticket.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
