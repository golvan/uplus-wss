window.settings = {
  "i18n": {
    "defaultlocale": "en",
    "languages": [
      "en"
    ],
    "showLangSwitch": false
  },
  "quicklinks": [
    {
      "title": {
        "en": "Payment assistance",
        "fr": "Payment assistance"
      },
      "action": "createNewWork",
      "actionparam": "",
      "objclass": "PegaFS-SCM-Work-SpecialCircumstance",
      "url": window.location.origin + "/prweb/app/PegaCSFSSelfService_4995/",
      "startcase": "pyStartCase",
      "application": "PegaCSFSSelfService",
      "icon": "pi-star",
      "hide": false
    },
    {
      "title": {
        "en": "File a complaint",
        "fr": "deposer une plainte"
      },
      "action": "createNewWork",
      "actionparam": "",
      "objclass": "PegaFS-SCM-Work-FileAComplaint",
      "url": window.location.origin + "/prweb/app/PegaCSFSSelfService_5336/",
      "startcase": "pyStartCase",
      "application": "PegaCSFSSelfService",
      "icon": "pi-star",
      "hide": false
    },
    {
      "title": {
        "en": "Set up travel notification",
        "fr": "Set up travel notification"
      },
      "action": "createNewWork",
      "actionparam": "",
      "objclass": "PegaFS-SCM-Work-TravelNotification",
      "url": window.location.origin + "/prweb/app/PegaCSFSSelfService_1340/",
      "startcase": "pyStartCase",
      "application": "PegaCSFSSelfService",
      "icon": "pi-star",
      "hide": false
    },
    {
      "title": {
        "en": "Book a table",
        "fr": "Book a table"
      },
      "action": "createNewWork",
      "actionparam": "",
      "objclass": "PegaFS-SCM-Work-OfferRestaurantBooking",
      "url": window.location.origin + "/prweb/app/PegaCSFSSelfService_4522/",
      "startcase": "pyStartCase",
      "application": "PegaCSFSSelfService",
      "icon": "",
      "extraparam": "IsWSSQuickLink=true",
      "hide": false
    },
    {
      "title": {
        "en": "Expense Assist",
        "fr": "Expense Assist"
      },
      "action": "createNewWork",
      "actionparam": "",
      "objclass": "PegaFS-SCM-Work-OfferExpensesAssist",
      "url": window.location.origin + "/prweb/app/PegaCSFSSelfService_4681/",
      "startcase": "pyStartCase",
      "application": "PegaCSFSSelfService",
      "icon": "",
      "extraparam": "IsWSSQuickLink=true",
      "hide": false
    },
    {
      "title": {
        "en": "Enhanced Dashboard",
        "fr": "Enhanced Dashboard"
      },
      "action": "createNewWork",
      "actionparam": "",
      "objclass": "PegaFS-SCM-Work-OfferEnhancedDashboard",
      "url": window.location.origin + "/prweb/app/PegaCSFSSelfService_9796/",
      "startcase": "pyStartCase",
      "application": "PegaCSFSSelfService",
      "icon": "",
      "extraparam": "IsWSSQuickLink=true",
      "hide": false
    },
    {
      "title": {
        "en": "Utility Saver",
        "fr": "Utility Saver"
      },
      "action": "createNewWork",
      "actionparam": "",
      "objclass": "PegaFS-SCM-Work-OfferUtilitySaver",
      "url": "",
      "startcase": "pyStartCase",
      "application": "",
      "icon": "",
      "hide": false
    },
    {
      "title": {
        "en": "Loan Origination",
        "fr": "deposer une plainte"
      },
      "action": "createNewWork",
      "actionparam": "",
      "objclass": "PegaSAFS-Work-Opportunity-Ind",
      "url": window.location.origin + "/prweb/app/PegaSAFSSampleRetailDemo1_2403/",
      "startcase": "pyStartCase",
      "application": "PegaSAFSSample_RetailDemo",
      "icon": "",
      "extraparam": "ProductCategory=Lending,EstimatedCreditScore=Excellent (750 & Above)",
      "hide": false
    }
  ],
  "billpay": {
    "action": "createNewWork",
    "actionparam": "",
    "objclass": "",
    "url": "",
    "startcase": "pyStartCase",
    "application": "",
    "extraparam": "",
    "hidebillpay": false
  },
  "todo": {
    "action": "display",
    "actionparam": "pyToDoList",
    "objclass": "Data-Portal",
    "url": window.location.origin + "/prweb/app/PegaSAFSSampleRetailDemo1/",
    "startcase": "pyStartCase",
    "application": "PegaSAFSSample_RetailDemo",
    "hideactivity": false,
    "hideaccount": false
  },
  "kmhelp": {
    "action": "display",
    "actionparam": "KMHelpSitePortal",
    "objclass": "Data-Portal",
    "url": window.location.origin + "/prweb",
    "startcase": "pyStartCase",
    "application": "PegaCSFSSelfService",
    "extraparam": "pyActivity=KMDisplayHelpPortal,KMHelpSiteName=Uplusbank"
  },
  "homeheroaction": {
    "action": "createNewWork",
    "actionparam": "",
    "objclass": "PegaMKT-Work-Microsite-NonBundledOffers",
    "url": window.location.origin + "/prweb",
    "startcase": "pyStartCase",
    "application": "PegaMarketingFS_CRMSample",
    "pega_userid": "CRMSampleMicrositeFS",
    "pega_pwd": "install12345!",
    "extraparam": "I=Sales,G=DepositAccounts,O=SavingPLUS"
  },
  "offeraction": {
    "action": "createNewWork",
    "actionparam": "",
    "objclass": "PegaMKT-Work-Microsite-NonBundledOffers",
    "url": window.location.origin + "/prweb",
    "startcase": "pyStartCase",
    "application": "PegaMarketingFS_CRMSample",
    "pega_userid": "CRMSampleMicrositeFS",
    "pega_pwd": "install12345!",
    "extraparam": "I=Sales,G=DepositAccounts,O=SavingPLUS,ShowBundle=true"
  },
  "users": [{
    "username": "Mary.Fischer",
    "password": "install12345!",
    "img": "avatar-maryfischer.png",
    "company_name": "",
    "name": "Mary Fischer",
    "pega_userid": "FSSelfServiceUserDemoEx",
    "pega_pwd": "install12345!",
    "load_by_default": true,
    "accountID": "5213176678081779",
    "contactID": "1557950881",
    "subscriberID": "PEGASAFS-WORK-CONTACT CON-734",
    "extraparam": "ContactID=1557950881,CifNbr=1557950881,Verified=true",
    "customerID": "PEGASAFS-WORK-CONTACT CON-734",
    "billpay": 164.8,
    "otp_send_to": "",
  },
  {
    "username": "Daniel.Brown",
    "password": "install12345!",
    "img": "avatar-1.jpg",
    "company_name": "",
    "name": "Daniel Brown",
    "pega_userid": "safswssdemo@pega.com",
    "pega_pwd": "install12345!",
    "load_by_default": false,
    "accountID": "1395800917",
    "contactID": "1000000091",
    "subscriberID": "PEGASAFS-WORK-CONTACT CON-891",
    "extraparam": "ContactID=PEGASAFS-WORK-CONTACT CON-891,CifNbr=1000000091,Verified=true",
    "customerID": "PEGASAFS-WORK-CONTACT CON-891",
    "billpay": 264.8,
    "otp_send_to": "",
  },
  {
    "username": "Nancy.Drummer",
    "password": "install12345!",
    "img": "avatar-2.jpg",
    "company_name": "",
    "name": "Nancy Drummer",
    "pega_userid": "FSSelfServiceUser",
    "pega_pwd": "install12345!",
    "load_by_default": false,
    "accountID": "5785317044",
    "contactID": "1544891611",
    "subscriberID": "PEGASAFS-WORK-CONTACT CON-733",
    "extraparam": "CifNbr=1544891611,ContactID=1544891611,CustomerID=PEGASAFS-WORK-CONTACT CON-733,Verified=true",
    "customerID": "PEGASAFS-WORK-CONTACT CON-733",
    "billpay": 164.8,
    "otp_send_to": "",
  },
  {
    "username": "Mary.Romano",
    "password": "install12345!",
    "img": "avatar-2.jpg",
    "company_name": "",
    "name": "Mary Romano",
    "pega_userid": "FSSelfServiceUser",
    "pega_pwd": "install12345!",
    "load_by_default": false,
    "accountID": "473451388",
    "contactID": "7103716306",
    "subscriberID": "PEGASAFS-WORK-CONTACT CON-2876",
    "extraparam": "ContactID=7103716306,CifNbr=7103716306,Verified=true",
    "customerID": "PEGASAFS-WORK-CONTACT CON-2876",
    "billpay": 164.8,
    "otp_send_to": "",
  },
  {
    "username": "Shea.Parker",
    "password": "install12345!",
    "img": "avatar-2.jpg",
    "company_name": "",
    "name": "Shea Parker",
    "pega_userid": "FSSelfServiceUser",
    "pega_pwd": "install12345!",
    "load_by_default": false,
    "accountID": "5989919999999990",
    "contactID": "7777777773",
    "subscriberID": "PEGASAFS-WORK-CONTACT CON-490",
    "extraparam": "ContactID=7777777773,CifNbr=7777777773,Verified=true",
    "customerID": "PEGASAFS-WORK-CONTACT CON-490",
    "billpay": 164.8,
    "otp_send_to": "",
  },
  {
    "username": "Emily.Foster",
    "password": "install12345!",
    "img": "avatar-2.jpg",
    "company_name": "",
    "name": "Emily Foster",
    "pega_userid": "FSSelfServiceUser",
    "pega_pwd": "install12345!",
    "load_by_default": false,
    "accountID": "3452999999999999",
    "contactID": "0000000022",
    "subscriberID": "PEGASAFS-WORK-CONTACT CON-3782",
    "extraparam": "ContactID=PEGASAFS-WORK-CONTACT CON-3782,CifNbr=0000000022,Verified=true,email=Emily.foster@gmail.com",
    "customerID": "PEGASAFS-WORK-CONTACT CON-3782",
    "billpay": 164.8,
    "otp_send_to": "",
  },
  {
    "username": "Joseph.Miller",
    "password": "install12345!",
    "img": "avatar-1.jpg",
    "company_name": "",
    "name": "Joseph Miller",
    "pega_userid": "FSSelfServiceUser",
    "pega_pwd": "install12345!",
    "load_by_default": false,
    "accountID": "3789903369999990",
    "contactID": "0000000023",
    "subscriberID": "PEGASAFS-WORK-CONTACT CON-3834",
    "extraparam": "ContactID=PEGASAFS-WORK-CONTACT CON-3834,CifNbr=0000000023,Verified=true,email=Joseph.miller@gmail.com",
    "customerID": "PEGASAFS-WORK-CONTACT CON-3834",
    "billpay": 164.8,
    "otp_send_to": "",
  },
  {
    "username": "John.Trevino",
    "password": "install12345!",
    "img": "avatar-1.jpg",
    "company_name": "",
    "name": "John Trevino",
    "pega_userid": "FSSelfServiceUser",
    "pega_pwd": "install12345!",
    "load_by_default": false,
    "accountID": "3004036821",
    "contactID": "0001747221",
    "subscriberID": "PEGASAFS-WORK-CONTACT CON-4815",
    "extraparam": "ContactID=PEGASAFS-WORK-CONTACT CON-4815,CifNbr=0001747221,Verified=true,email=John.Trevino@pegatsdemo.com",
    "customerID": "PEGASAFS-WORK-CONTACT CON-4815",
    "billpay": 164.8,
    "otp_send_to": "",
  },
  ],
  "pega_chat": {
    "WCBConfigName": "Demo X FS",
    "WebChatBotID": "botf27b3483830947b9a30dfeb72dfaa306",
    "ApplicationName": "PegaCSFSSelfService",
    "MashupURL": window.location.origin + "/prweb/PRChat/app/PegaCSFSSelfService_3102/",
    "ShowAsButton": true,
    "EnableProActiveNotification": true,
    "ProActiveNotificationDismissTime": "120",
    "CoBrowseServerURL": window.location.origin + ":8043/co",
    "CoBrowseToken": "58d3c9aa21365a993bb0fed3",
    "ResetLogout": true
  },
  "pega_marketing": {
    "Host": window.location.origin,
    "Port": "443",
    "replaceHomePageHeader": false,
    "showAIOverlay": true,
    "enableRTS": true,
    "homePage": {
      "containerName": "TopOffers",
      "placement": "Tile,Tile,Tile",
      "clickaction": "Mashup"
    },
    "accountPage": {
      "containerName": "TopOffers",
      "placement": "Tile",
      "clickaction": "Mashup"
    },
    "phonePage": {
      "containerName": "TopOffers",
      "placement": "Tile",
      "clickaction": "Mashup"
    },
    "offerPage": {
      "containerName": "TopOffers",
      "placement": "Hero,Tile,Tile,Tile",
      "clickaction": "Mashup"
    }
  },
  pega_auth_2fa: {
    url: window.location.origin,
    otp_auth_enabled: true,
    send_mode: "email",
    email_settings: {
      "CorrespondenceName": "pyDefaultOTPCorr",
      "EmailAccount": "Default",
      "Subject": "New OTP Request",
      "ToAddress": "",
      "ValidateMaxAge": "false"
    },
    sms_settings: {
      "ToPhoneNumber": "",
      "From": "Pega",
      "SMSAccount": "Default",
      "Message": "Uplus OTP login code",
      "ValidateMaxAge": "false"
    }
  }
}