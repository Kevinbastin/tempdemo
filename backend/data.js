const data = {
  dashboard: {
    kpis: {
      openTickets: { value: '284', change: '+18 today' },
      liveChats: { value: '14', change: '4 AI-handled' },
      csatScore: { value: '94.2%', change: '+1.4% this week' },
      avgResponse: { value: '2m 18s', change: '-34s vs last week' }
    },
    ticketVolume: [
      { day: 'Mon', count: 62 },
      { day: 'Tue', count: 88 },
      { day: 'Wed', count: 74 },
      { day: 'Thu', count: 95 },
      { day: 'Fri', count: 81 },
      { day: 'Sat', count: 48 },
      { day: 'Sun', count: 37 }
    ],
    activeAgents: [
      { name: 'Priya S.', color: '#635BFF', status: 'Online', load: '5 chats' },
      { name: 'Arjun M.', color: '#FF5996', status: 'Online', load: '3 chats' },
      { name: 'Kavya R.', color: '#00D4FF', status: 'Busy', load: 'Max reached' },
      { name: 'Rahul D.', color: '#00D4B1', status: 'Away', load: '0 chats' }
    ],
    recentTickets: [
      { id: '#4821', title: 'Payment not processed', customer: 'Ananya K.', channel: 'Live Chat', priority: 'Critical', status: 'Open' },
      { id: '#4820', title: 'Can\'t reset password', customer: 'Suresh V.', channel: 'Email', priority: 'High', status: 'In Progress' },
      { id: '#4819', title: 'Feature request: exports', customer: 'Meera L.', channel: 'Chat', priority: 'Low', status: 'Resolved' },
      { id: '#4818', title: 'API timeout errors', customer: 'Rohit B.', channel: 'Email', priority: 'Critical', status: 'Pending' }
    ]
  },
  liveChats: [
    {id:'C-019',name:'Ananya Kumar',avatar:'#635BFF',status:'Active',msg:'My payment keeps failing on the checkout page. I tried 3 times.',time:'just now',tags:['Billing']},
    {id:'C-018',name:'Suresh Verma',avatar:'#FF5996',status:'AI Reply',msg:'I can\'t log in. It says invalid credentials but I just reset.',time:'2m ago',tags:['Auth']},
    {id:'C-017',name:'Meera Lal',avatar:'#00D4FF',status:'Waiting',msg:'Any update on my refund request from last week?',time:'5m ago',tags:['Refund']},
    {id:'C-016',name:'Rohit Bansal',avatar:'#00D4B1',status:'Active',msg:'The API is throwing 504 timeout errors under load.',time:'8m ago',tags:['API','Tech']},
    {id:'C-015',name:'Deepa Nair',avatar:'#F59E0B',status:'Resolved',msg:'How do I export my data to CSV format?',time:'12m ago',tags:['Export']}
  ],
  tickets: [
    {id:'#4821',title:'Payment not processed on checkout',customer:'Ananya K.',channel:'Chat',priority:'Critical',status:'Open',assigned:'Priya S.',age:'12m'},
    {id:'#4820',title:'Can\'t reset password — email not arriving',customer:'Suresh V.',channel:'Email',priority:'High',status:'In Progress',assigned:'AI Agent',age:'28m'},
    {id:'#4819',title:'API timeout errors at peak load',customer:'Rohit B.',channel:'Email',priority:'Critical',status:'Open',assigned:'Arjun M.',age:'1h'},
    {id:'#4818',title:'Data export returning empty CSV',customer:'Kavya L.',channel:'Chat',priority:'Medium',status:'Pending',assigned:'Unassigned',age:'2h'},
    {id:'#4817',title:'Billing address update not saving',customer:'Deepa N.',channel:'Portal',priority:'High',status:'In Progress',assigned:'AI Agent',age:'2h'},
    {id:'#4816',title:'Feature request: bulk actions for tickets',customer:'Meera R.',channel:'Email',priority:'Low',status:'Open',assigned:'Unassigned',age:'4h'}
  ],
  customers: [
    {name:'Ananya Kumar',email:'ananya@email.com',plan:'Pro',tickets:4,csat:'⭐ 4.8',status:'Active',joined:'Jan 2024',color:'#635BFF'},
    {name:'Suresh Verma',email:'suresh@work.com',plan:'Enterprise',tickets:2,csat:'⭐ 5.0',status:'Active',joined:'Mar 2023',color:'#FF5996'},
    {name:'Meera Lal',email:'meera@startup.io',plan:'Starter',tickets:7,csat:'⭐ 4.2',status:'At Risk',joined:'Aug 2024',color:'#00D4FF'},
    {name:'Rohit Bansal',email:'rohit@dev.co',plan:'Pro',tickets:1,csat:'⭐ 4.9',status:'Active',joined:'Feb 2024',color:'#00D4B1'},
    {name:'Deepa Nair',email:'deepa@corp.com',plan:'Enterprise',tickets:3,csat:'⭐ 4.7',status:'Active',joined:'Nov 2022',color:'#F59E0B'},
    {name:'Kavya Singh',email:'kavya@agency.com',plan:'Starter',tickets:9,csat:'⭐ 3.8',status:'Churned',joined:'May 2024',color:'#697386'}
  ],
  knowledgeBase: [
    {title:'How to reset your password',cat:'Account',views:'4,821',helpful:'98%',icon:'🔑'},
    {title:'Updating billing information',cat:'Billing',views:'3,204',helpful:'95%',icon:'💳'},
    {title:'Exporting data to CSV or Excel',cat:'Features',views:'2,891',helpful:'97%',icon:'📊'},
    {title:'API rate limits and best practices',cat:'Developer',views:'2,640',helpful:'94%',icon:'⚡'},
    {title:'Understanding subscription plans',cat:'Billing',views:'2,110',helpful:'92%',icon:'📋'},
    {title:'Troubleshooting login issues',cat:'Account',views:'1,984',helpful:'96%',icon:'🛠'}
  ],
  analytics: {
    weekDays: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    ticketVol: [62,88,74,95,81,48,37]
  },
  team: [
    {name:'Priya Sharma',role:'Senior Agent',status:'Online',chats:5,resolved:24,csat:'4.9',color:'#635BFF'},
    {name:'Arjun Mehta',role:'Support Agent',status:'Online',chats:3,resolved:18,csat:'4.7',color:'#FF5996'},
    {name:'Kavya Reddy',role:'Support Agent',status:'Busy',chats:6,resolved:21,csat:'4.8',color:'#00D4FF'},
    {name:'Rahul Desai',role:'Junior Agent',status:'Away',chats:0,resolved:12,csat:'4.5',color:'#00D4B1'},
    {name:'Sneha Patel',role:'Team Lead',status:'Online',chats:2,resolved:31,csat:'5.0',color:'#F59E0B'},
    {name:'Vikram Nair',role:'Support Agent',status:'Offline',chats:0,resolved:9,csat:'4.4',color:'#697386'}
  ],
  notifications: [
    {type:'critical',icon:'🔴',title:'SLA Breach — Ticket #4821',desc:'Payment ticket unresolved for 45 mins. SLA limit is 30 mins.',time:'2m ago',action:'View Ticket'},
    {type:'ai',icon:'🤖',title:'AI Flagged Unusual Pattern',desc:'3 customers reported the same issue: email login failure after 10pm.',time:'8m ago',action:'Investigate'},
    {type:'info',icon:'💬',title:'Ananya Kumar sent a reply',desc:'Customer replied to ticket #4821 — billing issue awaiting resolution.',time:'12m ago',action:'Reply'},
    {type:'success',icon:'✅',title:'Ticket #4816 Resolved',desc:'API timeout issue resolved by Arjun M. Customer rated 5 stars.',time:'18m ago',action:'View'},
    {type:'warning',icon:'⚠️',title:'High Chat Queue Alert',desc:'14 concurrent chats active. Recommend routing 2 chats to AI agent.',time:'24m ago',action:'Manage'},
    {type:'info',icon:'📚',title:'New Article Suggested by AI',desc:'AI detected 12 tickets about "export to CSV". Article auto-drafted.',time:'1h ago',action:'Review'},
    {type:'system',icon:'⚙️',title:'System Maintenance Scheduled',desc:'Atlas AI maintenance window: Saturday 2–4 AM. No downtime expected.',time:'3h ago',action:'Details'},
    {type:'success',icon:'🌟',title:'CSAT Score Milestone',desc:'Team achieved 94.2% satisfaction rate this week. New record!',time:'5h ago',action:'Share'}
  ],
  reports: [
    {name:'Weekly Support Summary',period:'May 12–18, 2025',tickets:485,csat:'94.2%',ai:'68%',status:'Ready'},
    {name:'Agent Performance Report',period:'May 2025',tickets:1840,csat:'93.8%',ai:'65%',status:'Ready'},
    {name:'AI Resolution Analysis',period:'Q2 2025',tickets:4820,csat:'94.0%',ai:'71%',status:'Generating'},
    {name:'Customer Satisfaction Deep Dive',period:'April 2025',tickets:2140,csat:'92.4%',ai:'63%',status:'Ready'},
    {name:'SLA Compliance Report',period:'May 2025',tickets:1840,csat:'—',ai:'—',status:'Ready'}
  ]
};

module.exports = data;
