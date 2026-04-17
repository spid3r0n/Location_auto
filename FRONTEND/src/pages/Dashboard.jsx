import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, Mail, Phone, Upload, CheckCircle, 
  Clock, XCircle, Calendar, CreditCard, Camera, Car
} from 'lucide-react';

const recentReservations = [
  { id: 'RES-8921', car: 'Mercedes GLE', image: 'https://images.unsplash.com/photo-1606611013016-969c19ba27d5?w=200&h=100&fit=crop', dates: 'Oct 15 - Oct 20, 2023', total: '$600', status: 'Completed' },
  { id: 'RES-9042', car: 'Tesla Model 3', image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=200&h=100&fit=crop', dates: 'Nov 02 - Nov 05, 2023', total: '$285', status: 'Ongoing' },
  { id: 'RES-9105', car: 'Audi A4', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=200&h=100&fit=crop', dates: 'Dec 10 - Dec 12, 2023', total: '$150', status: 'Cancelled' },
];

const documents = [
  { type: 'Driver\'s License', status: 'Verified', icon: CheckCircle, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { type: 'National ID', status: 'Verified', icon: CheckCircle, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { type: 'Proof of Insurance', status: 'Pending', icon: Clock, color: 'text-amber-500', bg: 'bg-amber-500/10' },
];

export default function Dashboard() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);

  const handleSave = () => {
    setSaveLoading(true);
    setTimeout(() => {
      setSaveLoading(false);
      setIsEditing(false);
    }, 1000);
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Completed': return <span className="badge badge-success">{status}</span>;
      case 'Ongoing': return <span className="badge badge-info">{status}</span>;
      case 'Cancelled': return <span className="badge badge-danger">{status}</span>;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-navy-950 pt-24 pb-12">
      {/* Background glow */}
      <div className="fixed inset-0 bg-gradient-radial pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold text-white font-[var(--font-heading)] mb-2">My Dashboard</h1>
            <p className="text-slate-400">Manage your profile, documents, and reservations.</p>
          </div>
          <div className="flex gap-4">
             <button className="btn-secondary !py-2 !px-4">Need Help?</button>
             <button className="btn-primary !py-2 !px-4">New Booking</button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 stagger-children">
          {/* Left Column: Profile & Docs */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Profile Section */}
            <section className="glass rounded-2xl p-6" id="profile-section">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white font-[var(--font-heading)] flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-400" /> Profile
                </h2>
                {!isEditing && (
                  <button onClick={() => setIsEditing(true)} className="text-sm text-blue-400 hover:text-blue-300 bg-transparent border-none cursor-pointer">
                    Edit
                  </button>
                )}
              </div>

              <div className="flex flex-col items-center mb-8">
                <div className="relative group">
                  <div className="w-24 h-24 rounded-full bg-navy-800 border-2 border-blue-500/30 overflow-hidden mb-3 shadow-glow">
                    <img src="https://ui-avatars.com/api/?name=John+Doe&background=3b82f6&color=fff&size=150" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  {isEditing && (
                    <button className="absolute bottom-3 right-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center border-2 border-navy-950 hover:bg-blue-600 transition-colors">
                      <Camera className="w-4 h-4" />
                    </button>
                  )}
                </div>
                {!isEditing && <h3 className="text-lg font-medium text-white">{profile.name}</h3>}
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1 uppercase tracking-wider">Full Name</label>
                  {isEditing ? (
                    <input type="text" value={profile.name} onChange={e => setProfile({...profile, name: e.target.value})} className="input-field !py-2" />
                  ) : (
                    <div className="text-slate-300 text-sm flex items-center gap-2"><User className="w-4 h-4 text-slate-500"/> {profile.name}</div>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1 uppercase tracking-wider">Email Address</label>
                  {isEditing ? (
                    <input type="email" value={profile.email} onChange={e => setProfile({...profile, email: e.target.value})} className="input-field !py-2" />
                  ) : (
                    <div className="text-slate-300 text-sm flex items-center gap-2"><Mail className="w-4 h-4 text-slate-500"/> {profile.email}</div>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1 uppercase tracking-wider">Phone Number</label>
                  {isEditing ? (
                    <input type="tel" value={profile.phone} onChange={e => setProfile({...profile, phone: e.target.value})} className="input-field !py-2" />
                  ) : (
                    <div className="text-slate-300 text-sm flex items-center gap-2"><Phone className="w-4 h-4 text-slate-500"/> {profile.phone}</div>
                  )}
                </div>
              </div>

              {isEditing && (
                <div className="flex gap-3 mt-6">
                  <button onClick={() => setIsEditing(false)} className="flex-1 btn-secondary !py-2">Cancel</button>
                  <button onClick={handleSave} disabled={saveLoading} className="flex-1 btn-primary !py-2">
                    {saveLoading ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : 'Save'}
                  </button>
                </div>
              )}
            </section>

            {/* Documents Section */}
            <section className="glass rounded-2xl p-6" id="documents-section">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white font-[var(--font-heading)] flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-blue-400" /> Documents
                </h2>
              </div>

              <div className="space-y-4">
                {documents.map((doc, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg ${doc.bg} flex items-center justify-center`}>
                        <doc.icon className={`w-4 h-4 ${doc.color}`} />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{doc.type}</div>
                        <div className={`text-xs ${doc.color}`}>{doc.status}</div>
                      </div>
                    </div>
                    {doc.status !== 'Verified' && (
                      <button className="text-xs text-blue-400 hover:text-blue-300 underline bg-transparent border-none cursor-pointer">
                        Upload
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 flex items-center justify-center gap-2 py-3 rounded-xl border border-dashed border-slate-600 text-slate-400 text-sm hover:text-white hover:border-slate-400 hover:bg-white/5 transition-colors cursor-pointer bg-transparent">
                <Upload className="w-4 h-4" /> Upload New Document
              </button>
            </section>
          </div>

          {/* Right Column: Reservations */}
          <div className="lg:col-span-2">
            <section className="glass rounded-2xl p-6 h-full" id="reservations-section">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white font-[var(--font-heading)] flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-400" /> Recent Reservations
                </h2>
                <Link to="#" className="text-sm text-blue-400 hover:text-blue-300 no-underline">View All</Link>
              </div>

              {recentReservations.length > 0 ? (
                <div className="space-y-4">
                  {recentReservations.map((res) => (
                    <div key={res.id} className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-navy-900/50 border border-white/5 hover:border-white/10 transition-colors">
                      {/* Car Image */}
                      <div className="w-full sm:w-32 h-24 rounded-lg overflow-hidden bg-navy-800 flex-shrink-0">
                        <img src={res.image} alt={res.car} className="w-full h-full object-cover" />
                      </div>
                      
                      {/* Details */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="text-xs text-slate-500 mb-1">{res.id}</div>
                            <h3 className="text-base font-semibold text-white font-[var(--font-heading)]">{res.car}</h3>
                          </div>
                          {getStatusBadge(res.status)}
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm mt-auto">
                          <div className="flex items-center gap-1.5 text-slate-400">
                            <Calendar className="w-4 h-4 text-slate-500" /> {res.dates}
                          </div>
                          <div className="flex items-center gap-1.5 text-slate-400 ml-auto font-medium text-white">
                            Total: <span className="text-blue-400">{res.total}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                    <Car className="w-8 h-8 text-slate-500" />
                  </div>
                  <h3 className="text-white font-medium mb-1">No reservations yet</h3>
                  <p className="text-slate-400 text-sm mb-4">You haven't booked any cars yet.</p>
                  <Link to="/#cars" className="btn-primary !py-2 !px-6">Browse Cars</Link>
                </div>
              )}
            </section>
          </div>

        </div>
      </div>
    </div>
  );
}
