/**
 * Created by chengkj on 16/12/2.
 */

//黑名单
const BackListData= [
    {
      Id: 123,
      GroupName: "6zu",
      SystemName: "wtf",
      Endpoint: "neverused",
      SubEndpoint: "sep",
      Metric: "cpu",
      BeginTime: "2016-11-14 21:00:12",
      EndTime: "2016-11-24 10:42:04",
      Reason: "update"
    },
    {
      Id: 345,
      GroupName: "6zu",
      SystemName: "wtf",
      Endpoint: "neverused",
      SubEndpoint: "sep",
      Metric: "cpu",
      BeginTime: "2016-11-14 21:00:12",
      EndTime: "2016-11-24 10:42:04",
      Reason: "update"
    },
    {
      Id: 555,
      GroupName: "6zu",
      SystemName: "wtf",
      Endpoint: "neverused",
      SubEndpoint: "sep",
      Metric: "cpu",
      BeginTime: "2016-11-14 21:00:12",
      EndTime: "2016-11-24 10:42:04",
      Reason: "update"
    },
    {
      Id: 999,
      GroupName: "6zu",
      SystemName: "wtf",
      Endpoint: "neverused",
      SubEndpoint: "sep",
      Metric: "cpu",
      BeginTime: "2016-11-14 21:00:12",
      EndTime: "2016-11-24 10:42:04",
      Reason: "update"
    }
    ]


//升级规则
const RuleListData=[
  {
    Id: 2,
    SystemName: "system",
    Metric: "memory_used",
    Type: 2,
    Period: 36000,
    Value: "10",
    TargetLevel: 7
  },
  {
    Id: 3,
    SystemName: "system",
    Metric: "view_available",
    Type: 2,
    Period: 36000,
    Value: "10",
    TargetLevel: 7
  },
  {
    Id: 4,
    SystemName: "fcm",
    Metric: "view_available",
    Type: 2,
    Period: 36000,
    Value: "10",
    TargetLevel: 7
  },
  {
    Id: 6,
    SystemName: "fcm",
    Metric: "memory_used",
    Type: 2,
    Period: 36000,
    Value: "10",
    TargetLevel: 7
  }
  ]

const MonitorItemData={
  batch_test:
    [
      {
        Id: 19,
        SystemName: "batch_test",
        MetricName: "test_rename",
        Describe: "Describe Describe Describe Describe",
        ConfirmState: false
      },
      {
        Id: 21,
        SystemName: "batch_test",
        MetricName: "test2",
        Describe: "Describe Describe Describe Describe",
        ConfirmState: true
      }
      ],
  new_sys:
    [
      {
        Id: 3,
        SystemName: "new_sys",
        MetricName: "cpu_idle",
        Describe: "Describe Describe Describe",
        ConfirmState: true
      },

      {
        Id: 4,
        SystemName: "new_sys",
        MetricName: "disk_used",
        Describe: "DescribeDescribe",
        ConfirmState: false
      }
      ],
  old_sys:
    [
      {
        Id: 8,
        SystemName: "old_sys",
        MetricName: "cpu_idle",
        Describe: "Describe Describe Describe",
        ConfirmState: true
      },

      {
        Id: 9,
        SystemName: "old_sys",
        MetricName: "disk_used",
        Describe: "DescribeDescribe",
        ConfirmState: false
      }
      ]
}

const AlarmSourceData=[
  {
    Id: 1,
    SystemName: "system",
    Describe: "Describe",
    ConfirmState: true//false显示未确认后面加确认操作//true已确认
  },
  {
    Id: 3,
    SystemName: "wtf",
    Describe: "Describe",
    ConfirmState: false
  },
  {
    Id: 6,
    SystemName: "fuck",
    Describe: "Describe",
    ConfirmState: false
  }
  ]


const AlarmData=[
  {
    Id: 9,
    Title: "title",
    AlarmId: "system_192.168.0.1_memory_used",
    SystemName: "system",
    Endpoint: "192.168.0.1",
    SubEndpoint: "192",
    Metric: "memory_used",
    Value: "0.92",
    BaseValue: "0.8",
    Level: 1,
    AlarmContent: "test",
    FirstReportTime: "2016-11-15 20:48:01",
    LastReportTime: "2016-11-24 10:42:04"
  },
  {
    Id: 8,
    Title: "title",
    AlarmId: "system_192.168.0.1_memory_used",
    SystemName: "system",
    Endpoint: "192.168.0.1",
    SubEndpoint: "192",
    Metric: "memory_used",
    Value: "0.92",
    BaseValue: "0.8",
    Level: 1,
    AlarmContent: "test",
    FirstReportTime: "2016-11-15 20:48:01",
    LastReportTime: "2016-11-24 10:42:04"
  },
  {
    Id: 7,
    Title: "title",
    AlarmId: "system_192.168.0.1_memory_used",
    SystemName: "system",
    Endpoint: "192.168.0.1",
    SubEndpoint: "192",
    Metric: "memory_used",
    Value: "0.92",
    BaseValue: "0.8",
    Level: 1,
    AlarmContent: "test",
    FirstReportTime: "2016-11-15 20:48:01",
    LastReportTime: "2016-11-24 10:42:04"
  }
]

const ModalHistoryData=[
  {
    id: 1,
    Title: "123",
    SystemName: "123",
    Endpoint: "123",
    SubEndpoint: "",
    Metric: "123",
    Value: "123",
    BaseValue: "123",
    EventType: 1,
    Level: 1,
    ReportTime: "2016-11-03 17:17:29",
    AlarmContent: "2"
  },
  {
    id: 1,
    Title: "123",
    SystemName: "123",
    Endpoint: "123",
    SubEndpoint: "",
    Metric: "123",
    Value: "123",
    BaseValue: "123",
    EventType: 1,
    Level: 1,
    ReportTime: "2016-11-03 17:17:29",
    AlarmContent: "2"
  },
  {
    id: 1,
    Title: "123",
    SystemName: "123",
    Endpoint: "123",
    SubEndpoint: "",
    Metric: "123",
    Value: "123",
    BaseValue: "123",
    EventType: 1,
    Level: 1,
    ReportTime: "2016-11-03 17:17:29",
    AlarmContent: "2"
  },
  {
    id: 1,
    Title: "123",
    SystemName: "123",
    Endpoint: "123",
    SubEndpoint: "",
    Metric: "123",
    Value: "123",
    BaseValue: "123",
    EventType: 1,
    Level: 1,
    ReportTime: "2016-11-03 17:17:29",
    AlarmContent: "2"
  },
  {
    id: 1,
    Title: "123",
    SystemName: "123",
    Endpoint: "123",
    SubEndpoint: "",
    Metric: "123",
    Value: "123",
    BaseValue: "123",
    EventType: 1,
    Level: 1,
    ReportTime: "2016-11-03 17:17:29",
    AlarmContent: "2"
  },
  {
    id: 1,
    Title: "123",
    SystemName: "123",
    Endpoint: "123",
    SubEndpoint: "",
    Metric: "123",
    Value: "123",
    BaseValue: "123",
    EventType: 1,
    Level: 1,
    ReportTime: "2016-11-03 17:17:29",
    AlarmContent: "2"
  },
  {
    id: 1,
    Title: "123",
    SystemName: "123",
    Endpoint: "123",
    SubEndpoint: "",
    Metric: "123",
    Value: "123",
    BaseValue: "123",
    EventType: 1,
    Level: 1,
    ReportTime: "2016-11-03 17:17:29",
    AlarmContent: "2"
  },
  {
    id: 1,
    Title: "123",
    SystemName: "123",
    Endpoint: "123",
    SubEndpoint: "",
    Metric: "123",
    Value: "123",
    BaseValue: "123",
    EventType: 1,
    Level: 1,
    ReportTime: "2016-11-03 17:17:29",
    AlarmContent: "2"
  },
  {
    id: 1,
    Title: "123",
    SystemName: "123",
    Endpoint: "123",
    SubEndpoint: "",
    Metric: "123",
    Value: "123",
    BaseValue: "123",
    EventType: 1,
    Level: 1,
    ReportTime: "2016-11-03 17:17:29",
    AlarmContent: "2"
  },
  {
    id: 1,
    Title: "123",
    SystemName: "123",
    Endpoint: "123",
    SubEndpoint: "",
    Metric: "123",
    Value: "123",
    BaseValue: "123",
    EventType: 1,
    Level: 1,
    ReportTime: "2016-11-03 17:17:29",
    AlarmContent: "2"
  },
  {
    id: 1,
    Title: "123",
    SystemName: "123",
    Endpoint: "123",
    SubEndpoint: "",
    Metric: "123",
    Value: "123",
    BaseValue: "123",
    EventType: 1,
    Level: 1,
    ReportTime: "2016-11-03 17:17:29",
    AlarmContent: "2"
  },
  {
    id: 1,
    Title: "123",
    SystemName: "123",
    Endpoint: "123",
    SubEndpoint: "",
    Metric: "123",
    Value: "123",
    BaseValue: "123",
    EventType: 1,
    Level: 1,
    ReportTime: "2016-11-03 17:17:29",
    AlarmContent: "2"
  },
  {
    id: 1,
    Title: "123",
    SystemName: "123",
    Endpoint: "123",
    SubEndpoint: "",
    Metric: "123",
    Value: "123",
    BaseValue: "123",
    EventType: 1,
    Level: 1,
    ReportTime: "2016-11-03 17:17:29",
    AlarmContent: "2"
  },
  {
    id: 1,
    Title: "123",
    SystemName: "123",
    Endpoint: "123",
    SubEndpoint: "",
    Metric: "123",
    Value: "123",
    BaseValue: "123",
    EventType: 1,
    Level: 1,
    ReportTime: "2016-11-03 17:17:29",
    AlarmContent: "2"
  },
  {
    id: 1,
    Title: "123",
    SystemName: "123",
    Endpoint: "123",
    SubEndpoint: "",
    Metric: "123",
    Value: "123",
    BaseValue: "123",
    EventType: 1,
    Level: 1,
    ReportTime: "2016-11-03 17:17:29",
    AlarmContent: "2"
  },
  {
    id: 1,
    Title: "123",
    SystemName: "123",
    Endpoint: "123",
    SubEndpoint: "",
    Metric: "123",
    Value: "123",
    BaseValue: "123",
    EventType: 1,
    Level: 1,
    ReportTime: "2016-11-03 17:17:29",
    AlarmContent: "2"
  },
  {
    id: 1,
    Title: "123",
    SystemName: "123",
    Endpoint: "123",
    SubEndpoint: "",
    Metric: "123",
    Value: "123",
    BaseValue: "123",
    EventType: 1,
    Level: 1,
    ReportTime: "2016-11-03 17:17:29",
    AlarmContent: "2"
  },
  {
    id: 1,
    Title: "123",
    SystemName: "123",
    Endpoint: "123",
    SubEndpoint: "",
    Metric: "123",
    Value: "123",
    BaseValue: "123",
    EventType: 1,
    Level: 1,
    ReportTime: "2016-11-03 17:17:29",
    AlarmContent: "2"
  },
  {
    id: 1,
    Title: "123",
    SystemName: "123",
    Endpoint: "123",
    SubEndpoint: "",
    Metric: "123",
    Value: "123",
    BaseValue: "123",
    EventType: 1,
    Level: 1,
    ReportTime: "2016-11-03 17:17:29",
    AlarmContent: "2"
  },
  {
    id: 1,
    Title: "123",
    SystemName: "123",
    Endpoint: "123",
    SubEndpoint: "",
    Metric: "123",
    Value: "123",
    BaseValue: "123",
    EventType: 1,
    Level: 1,
    ReportTime: "2016-11-03 17:17:29",
    AlarmContent: "2"
  }
  ]

const ModalDetailsData=[
  {
    id: 1,
    Title: "123",
    SystemName: "123",
    Endpoint: "123",
    SubEndpoint: "000",
    Metric: "123",
    Value: "123",
    BaseValue: "123",
    EventType: 1,
    Level: 1,
    ReportTime: "2016-11-03 17:17:29",
    AlarmContent: "2"
  }
]

const SystemNameData=[]

const UserData=[]

const UserGroupData=[
  {
   Id: 137,
   Name: "xiao",
   Describe: ""
  },
   {
   Id: 138,
   Name: "rename",
   Describe: ""
  },
  {
   Id: 137,
   Name: "xiao",
   Describe: ""
  },
   {
   Id: 138,
   Name: "rename",
   Describe: ""
  }
]

const UserRelationData=[
    {
      GroupName: "xiao",
      GroupId: 22, 
      Users: 
        [
          {
            Id: 'yy',
            Name: "zuozhu",
            Mail: "22@11.com",
            Phone: "717718182929202"
          },
          {
            Id: 'll',
            Name: "zuozhu",
            Mail: "22@11.com",
            Phone: "717718182929202"
          },          
          {
          Id: 'hh',
          Name: "zuozhu",
          Mail: "22@11.com",
          Phone: "717718182929202"
        }
        ]
    },
   {
     GroupName: "rename",
     GroupId: 11,
     Users: 
       [
         {
           Id: 'ee',
           Name: "zuozhu",
           Mail: "22@11.com",
           Phone: "717718182929202"
         },
         {
           Id: 'aa',
           Name: "zuozhu",
           Mail: "22@11.com",
           Phone: "717718182929202"
         },
         {
           Id: 'bb',
           Name: "zuozhu",
           Mail: "22@11.com",
           Phone: "717718182929202"
         }
       ]
   }, 
  {
    GroupName: "cheng",
    GroupId: 333,
    Users:
      [
        {
          Id: 'cc',
          Name: "zuozhu",
          Mail: "22@11.com",
          Phone: "717718182929202"
        },
        {
          Id: 'dd',
          Name: "zuozhu",
          Mail: "22@11.com",
          Phone: "717718182929202"
        }
      ]
  }  
  
]
const UserMonitorRelationData=[]

const UserAttendanceData=[
  {
    Id: 11,
    GroupName: "g",
    Date: "2016-12-01",
    Duty: "me",//责任人
    Backup: "backup",//第二责任人
    Charge: "charge"//负责人
  }, 
  {
    Id: 13,
    GroupName: "g2",
    Date: "2016-12-01",
    Duty: "me",
    Backup: "backup",
    Charge: "charge"
  },
  {
    Id: 13,
    GroupName: "g2",
    Date: "2016-12-01",
    Duty: "me",
    Backup: "backup",
    Charge: "charge"
  }
]

//监控项
let metrics =[]

const State = {
  modalShow: false,
  modalDetailsShow: false,
  modalRenameShow:false,
  modalUserUpdateShow:false,
  modalAddUserRelateShow:false,
  modalAddUserMonitorRelationShow:false,
  modalAddUserAttendanceShow:false,
  modalUserAttendanceUpdateShow:false,

  //监控项面板是否显示
  modalAddMonitorItemShow:false,
  //规则面板是否显示
  modalAddShow:false,
  
  BackListData:BackListData,
  RuleListData:RuleListData,
  MonitorItemData:MonitorItemData,
  AlarmSourceData:AlarmSourceData,
  AlarmData:AlarmData,

  ModalHistoryData:ModalHistoryData,
  ModalDetailsData:ModalDetailsData,
  SystemNameData:SystemNameData,

  UserData:UserData,
  UserGroupData:UserGroupData,
  UserRelationData:UserRelationData,
  UserMonitorRelationData:UserMonitorRelationData,
  UserAttendanceData:UserAttendanceData,
  metrics:metrics,

}





export default State