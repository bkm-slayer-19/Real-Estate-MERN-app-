import { useState } from "react";
import "./agentsPage.scss";

function AgentsPage() {
  const [agents] = useState([
    {
      id: 1,
      name: "John Smith",
      title: "Senior Real Estate Agent",
      experience: "8 years",
      sales: "150+ properties sold",
      rating: 4.9,
      phone: "+1 (555) 123-4567",
      email: "john.smith@lamaestate.com",
      specialties: ["Luxury Homes", "Commercial Properties"],
      avatar: "/noavatar.jpg"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "Property Specialist",
      experience: "5 years",
      sales: "90+ properties sold",
      rating: 4.8,
      phone: "+1 (555) 987-6543",
      email: "sarah.johnson@lamaestate.com",
      specialties: ["First-Time Buyers", "Condominiums"],
      avatar: "/noavatar.jpg"
    },
    {
      id: 3,
      name: "Michael Chen",
      title: "Investment Property Expert",
      experience: "12 years",
      sales: "200+ properties sold",
      rating: 5.0,
      phone: "+1 (555) 456-7890",
      email: "michael.chen@lamaestate.com",
      specialties: ["Investment Properties", "Multi-Family Homes"],
      avatar: "/noavatar.jpg"
    },
    {
      id: 4,
      name: "Emily Davis",
      title: "Residential Sales Agent",
      experience: "6 years",
      sales: "120+ properties sold",
      rating: 4.7,
      phone: "+1 (555) 321-0987",
      email: "emily.davis@lamaestate.com",
      specialties: ["Family Homes", "New Construction"],
      avatar: "/noavatar.jpg"
    }
  ]);

  return (
    <div className="agentsPage">
      <div className="wrapper">
        <h1 className="title">Meet Our Expert Agents</h1>
        <p className="subtitle">
          Our team of experienced real estate professionals is here to help you 
          find your perfect property or sell your current one.
        </p>
        
        <div className="agentsContainer">
          {agents.map((agent) => (
            <div key={agent.id} className="agentCard">
              <div className="agentImage">
                <img src={agent.avatar} alt={agent.name} />
                <div className="rating">
                  <span>⭐ {agent.rating}</span>
                </div>
              </div>
              
              <div className="agentInfo">
                <h3>{agent.name}</h3>
                <p className="title">{agent.title}</p>
                
                <div className="stats">
                  <div className="stat">
                    <span className="label">Experience:</span>
                    <span className="value">{agent.experience}</span>
                  </div>
                  <div className="stat">
                    <span className="label">Sales:</span>
                    <span className="value">{agent.sales}</span>
                  </div>
                </div>
                
                <div className="specialties">
                  <span className="label">Specialties:</span>
                  <div className="tags">
                    {agent.specialties.map((specialty, index) => (
                      <span key={index} className="tag">{specialty}</span>
                    ))}
                  </div>
                </div>
                
                <div className="contact">
                  <div className="contactItem">
                    <img src="/chat.png" alt="" />
                    <span>{agent.phone}</span>
                  </div>
                  <div className="contactItem">
                    <span>📧</span>
                    <span>{agent.email}</span>
                  </div>
                </div>
                
                <button className="contactBtn">Contact Agent</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="joinTeam">
          <h2>Join Our Team</h2>
          <p>
            Are you a passionate real estate professional looking for a new opportunity? 
            We're always looking for talented agents to join our growing team.
          </p>
          <button className="joinBtn">Apply Now</button>
        </div>
      </div>
    </div>
  );
}

export default AgentsPage;