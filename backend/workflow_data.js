module.exports = (c = '#A855F7') => ({
  dashboard: {
    arr1: ['Select','Pan','Zoom','Connect'],
    arr2: [
          {x:60,y:80,label:'Trigger',sub:'Webhook',color:'#00D4B1',shape:'circle'},
          {x:220,y:80,label:'Filter',sub:'Condition',color:c,shape:'diamond'},
          {x:380,y:50,label:'AI Parse',sub:'LLM Node',color:'#635BFF',shape:'rect'},
          {x:380,y:130,label:'Log',sub:'Action',color:'#F97316',shape:'rect'},
          {x:540,y:80,label:'Transform',sub:'Data',color:c,shape:'rect'},
          {x:700,y:80,label:'Output',sub:'API Call',color:'#00D4B1',shape:'circle'},
        ],
    arr3: ['−','⌂','+'],
    arr4: [
        {label:'Active Flows',val:'12',trend:'+3 this week',col:'#00D4B1'},
        {label:'Executions Today',val:'2,841',trend:'+18% vs yesterday',col:c},
        {label:'Success Rate',val:'98.7%',trend:'↑ 0.4% improvement',col:'#635BFF'},
      ],
  },
  automationFlow: {
    arr1: [
          {name:'Lead Enrichment Flow',status:'Success',time:'2m ago',col:'#00D4B1'},
          {name:'Invoice Automation',status:'Running',time:'Just now',col:c},
          {name:'Support Triage',status:'Success',time:'8m ago',col:'#00D4B1'},
          {name:'Data Sync Pipeline',status:'Failed',time:'15m ago',col:'#E5484D'},
          {name:'Onboarding Sequence',status:'Success',time:'22m ago',col:'#00D4B1'},
        ],
    arr2: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
  },
  taskPipeline: {
  },
  triggerCenter: {
    arr1: [
        {time:'09:42:18',name:'Webhook Receiver',status:'Success',dur:'142ms',col:'#00D4B1'},
        {time:'09:40:00',name:'Cron Scheduler',status:'Success',dur:'38ms',col:'#00D4B1'},
        {time:'09:37:55',name:'Email Inbound',status:'Success',dur:'204ms',col:'#00D4B1'},
        {time:'09:35:00',name:'API Polling',status:'Success',dur:'91ms',col:'#00D4B1'},
        {time:'09:30:12',name:'Webhook Receiver',status:'Failed',dur:'timeout',col:'#E5484D'},
      ],
  },
  smartRules: {
    arr1: [
            'Auto-tag leads from LinkedIn ads',
            'Pause flows on API error burst',
            'Route EU contacts to GDPR flow',
          ],
    arr2: [['Triggered today','1,240'],['Passed conditions','1,189'],['Actions executed','1,189'],['Errors','12']],
  },
  aiSuggestions: {
  },
  teamWorkflow: {
    arr1: [
        {who:'Riya K.',col:'#635BFF',action:'Created new flow "Lead Nurture v3"',time:'5m ago'},
        {who:'Aryan S.',col:'#FF5996',action:'Deployed Invoice Automation to production',time:'12m ago'},
        {who:'Neha M.',col:'#00D4FF',action:'Updated Smart Rule: Churn Risk Alert',time:'28m ago'},
        {who:'Amit P.',col:'#00D4B1',action:'Fixed timeout on Webhook Receiver',time:'45m ago'},
        {who:'Vikram S.',col:c,action:'Connected new Stripe integration',time:'1h ago'},
      ],
  },
  activityStream: {
    arr1: ['All','Flows','Triggers','Rules','Errors'],
    arr2: [
        {label:'Events today',val:'3,241',col:'#00D4B1'},
        {label:'Avg exec time',val:'680ms',col:c},
        {label:'Error rate',val:'0.4%',col:'#E5484D'},
        {label:'Flows triggered',val:'284',col:'#635BFF'},
      ],
  },
  performance: {
    arr1: ['7D','30D','90D'],
    arr2: [
        {label:'Total Executions',val:'18,429',trend:'+22%',col:'#00D4B1',up:true},
        {label:'Success Rate',val:'98.7%',trend:'+0.4%',col:c,up:true},
        {label:'Avg Latency',val:'680ms',trend:'−140ms',col:'#635BFF',up:true},
        {label:'Errors',val:'241',trend:'+12',col:'#E5484D',up:false},
      ],
    arr3: [2100,2450,1980,2800,2600,3100,3200],
    arr4: [
          {name:'Lead Enrichment',pct:38,col:'#00D4B1'},
          {name:'Invoice Automation',pct:24,col:c},
          {name:'Email Sequences',pct:18,col:'#635BFF'},
          {name:'Data Sync',pct:12,col:'#F59E0B'},
          {name:'Others',pct:8,col:'#697386'},
        ],
    arr5: ['Flow Name','Executions','Success Rate','Avg Time','Status'],
    arr6: [
            ['Lead Enrichment Flow','7,012','99.2%','1.1s','Active'],
            ['Invoice Auto-Gen','4,418','97.8%','0.8s','Active'],
            ['Email Sequences','3,315','99.5%','0.4s','Active'],
            ['CRM Data Sync','2,210','96.1%','2.1s','Active'],
            ['Support Triage','1,474','98.3%','0.9s','Paused'],
          ],
  },
  settings: {
    arr1: [['General','active'],['AI Engine',''],['Integrations',''],['Notifications',''],['Security',''],['Billing',''],['API Keys','']],
    arr2: [
            ['Max concurrent flows','AI auto-scaling enabled',true],
            ['Error retry policy','Retry failed steps up to 3× with backoff',true],
            ['Flow versioning','Keep history of all flow versions',true],
            ['Debug mode','Log full execution trace for debugging',false],
            ['Sandbox testing','Test flows without triggering real actions',true],
          ],
    arr3: [['AI Model','Claude Sonnet 4'],['Temperature','0.3 (precise)'],['Max tokens','4,096'],['AI Memory','Session + persistent']],
    arr4: [['Slack','Alerts + notifications','#635BFF','Connected'],['Stripe','Billing triggers','#00D4B1','Connected'],['HubSpot','CRM sync','#FF5996','Connected'],['Zapier','Flow export','#F59E0B','Not connected']],
  },
});
