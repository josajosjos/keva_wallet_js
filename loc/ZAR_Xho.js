﻿module.exports = {
  _: {
    storage_is_encrypted: 'Ukugcinwa kwakho kubhaliwe. Inombolo yokuvula iyadingeka ukuba ichithwe',
    enter_password: 'Faka inombolo yokuvula',
    bad_password: 'Iphasiwedi engalunganga, zama kwakhona',
    never: 'Ungalingi',
    continue: 'Qhubeka',
    ok: 'OK',
  },
  wallets: {
    select_wallet: 'Khetha ingxowa',
    options: 'Ukhetho',
    createBitcoinWallet:
      'Okwangoku awunayo ingxowa yebitcoin. Ukuze kuxhaswe ingxowa ekhawulezayo, Ingxowa yeBitcoin kufuneka idalwe okanye ikhutshelwe. Ungathanda ukuqhubeka ?',
    list: {
      app_name: 'KevaWallet',
      title: 'Ingxowa',
      header: 'Ingxowa imele ukuba nemfihlelo yokuyivula nekheli kwaye unokuyisebenzisa ukwamkela imali.',
      add: 'Yongeza Ingxowa',
      create_a_wallet: 'Yenza ingxowa',
      create_a_wallet1: 'Ayihlawulelwa kwaye ungayenza',
      create_a_wallet2: 'Ungenza zibeninzi indlela zokuhlawula',
      create_a_button: 'Add now',
      latest_transaction: 'Utshintsho olutsha',
      empty_txs1: 'Intengiso yakho iya kubonakala apha,',
      empty_txs2: 'akuho nanye okwangoku',
      empty_txs1_lightning:
        'Lightning wallet should be used for your daily transactions. Fees are unfairly cheap and speed is blazing fast.',
      empty_txs2_lightning: '\nTo start using it tap on "manage funds" and topup your balance.',
      tap_here_to_buy: 'Cofa apha ukuthenga ibitcoin',
    },
    reorder: {
      title: 'Yenza kwakhona ingxowa',
    },
    add: {
      title: 'yongeza ingxowa',
      description:
        'Unokukhangela ingxowa yephepha yokugcinwa kwephepha ( kwi-WIF – indlela lokungenisa ingxowa), okanye wenze ingxowa entsha. Ingxowa yeSegwit exhaswa yi-default.',
      scan: 'Ukuqondisa',
      create: 'Yakha',
      label_new_segwit: 'SegWit entsha',
      label_new_lightning: 'Umbane omtsha',
      wallet_name: 'igama lengxowa',
      wallet_type: 'uhlobo',
      or: 'okanye',
      import_wallet: 'Ukungenisa ingxowa',
      imported: 'ngeniswa',
      coming_soon: 'Kuza ngokukhawuleza',
      lightning: 'Umbane',
      bitcoin: 'Kevacoin',
      multi_address: 'Multiple addresses',
      single_address: 'Single address',
    },
    details: {
      title: 'Ingxowa',
      address: 'Ikheli',
      master_fingerprint: 'Master fingerprint',
      type: 'Uhlobo',
      label: 'Igama',
      destination: 'ukuya kuyo',
      description: 'ukuya kuyo',
      are_you_sure: 'Ingaba uqinisekile?',
      yes_delete: 'Ewe, yisuse',
      no_cancel: 'Hayi, rhoxisa',
      delete: 'Cima',
      save: 'Gcina',
      delete_this_wallet: 'Cima le ngxowa',
      export_backup: 'Ukuthumela ngaphandle / yokugcina',
      buy_bitcoin: 'Thenga ibitcoin',
      show_xpub: 'Bonise ingxowa XPUB',
      connected_to: 'Connected to',
      advanced: 'Advanced',
      use_with_hardware_wallet: 'Use with hardware wallet',
    },
    export: {
      title: 'ukuthunyelwa kweebhanki ',
    },
    xpub: {
      title: 'ingxowa XPUB',
      copiedToClipboard: 'Ikopishwe kwi-clipboard',
    },
    import: {
      title: 'ukungenisa',
      explanation:
        'Bhale apha imnemonic yakho, ngundoqo, WIF , okanye nantoni na onayo. KevaWallet uya kwenza konke okusemandleni ukuqiqa ifomathi efanelekileyo kwaye ingenise ingxowa yakho',
      imported: 'Ngenisiwe',
      error: 'Ayiphumelelanga ukungenisa. Nceda, uqiniseka ukuba idata ehlinzekiweyo iyasebenza.',
      success: 'Iphumelele',
      do_import: 'Ngeniswe',
      scan_qr: 'okanye ukukhangela iQR code?',
    },
    scanQrWif: {
      go_back: 'Buya Umva',
      cancel: 'Rhoxisa',
      decoding: 'Ukumisela',
      input_password: 'Igama lokungena',
      password_explain: 'Yi le BIP38 ikhifidi yangasese itsixe',
      bad_password: 'Inombolo yokuvula eli ngalunganga ',
      wallet_already_exists: 'Ikhredithi enjalo sele ikhona',
      bad_wif: 'Ezimbi WIF',
      imported_wif: 'Ngeniswa WIF ',
      with_address: ' Nge dilesi ',
      imported_segwit: 'Ngeniswa SegWit',
      imported_legacy: 'Ngeniswa ilifa',
      imported_watchonly: 'Ngeniswa bukele-kuphela',
    },
  },
  transactions: {
    list: {
      tabBarLabel: 'Ngeniswa',
      title: 'ngeniswa',
      description: 'Uluhlu lokungena okanye ukuphuma kweekhredithi zakho',
      conf: 'conf',
    },
    details: {
      title: 'Ngeniswa',
      from: 'Negalelo',
      to: 'Mveliso',
      copy: 'Ikopi',
      transaction_details: 'Iinkcukacha zentengiselwano',
      show_in_block_explorer: 'Bonisa ibhloko umhloi',
    },
  },
  send: {
    header: 'Thumela',
    details: {
      title: 'ukudala ukuthenga',
      amount_field_is_not_valid: 'intsimi yexabiso ayivumelekanga',
      fee_field_is_not_valid: 'Intsimi yentlawulo ayivumelekanga ',
      address_field_is_not_valid: 'Intsimi yeedilesi ayivumelekanga',
      total_exceeds_balance: 'Imali yokuthumela idlula imali ekhoyo.',
      create_tx_error: 'Kukho impazamo yokudala ukuthengiselana. Nceda, qinisekisa ukuba idilesi iyasebenza.',
      address: 'idilesi',
      amount_placeholder: 'inani lokuthumela (nge KVA)',
      fee_placeholder: 'kunye nentlawulo yokuthengiswa (nge KVA)',
      note_placeholder: 'inqaku kumntu',
      cancel: 'Rhoxisa',
      scan: 'Ukutshekisha',
      send: 'Thumela',
      create: 'Yenza',
      remaining_balance: 'Ibhalansi eseleyo',
    },
    confirm: {
      header: 'Qiniseka',
      sendNow: 'Thumela ngoku',
    },
    success: {
      done: 'Kwenzekile',
    },
    create: {
      details: 'Iinkcukacha',
      title: 'ukudala ukuthenga',
      error: 'Impazamo yokudala ukuthengiselana. Idilesi engavumelekanga okanye imali yokuthumela?',
      go_back: 'Buya umva',
      this_is_hex: 'Le yi ntengo hex, ityikityiwe ilungele ukukhutshelwa kumnatha.',
      to: 'Iya ku',
      amount: 'Isixa',
      fee: 'Ntlawulo',
      tx_size: 'TX ubungakanani',
      satoshi_per_byte: 'Satoshi nge-byte',
      memo: 'Memo',
      broadcast: 'Sasazwa',
      not_enough_fee: 'Akukho mali e neleyo. UKwandisa intlawulo ',
    },
  },
  receive: {
    header: 'Fumana',
    details: {
      title: 'Wabelane ngale dilesi nomhlawuli',
      share: 'yabelana',
      copiedToClipboard: 'Ikhutshelwe kwi-clipboard',
      label: 'Inkcazo',
      create: 'Yenza',
      setAmount: 'Fumana ngexabiso',
    },
    scan_lnurl: 'Scan to receive',
  },
  buyBitcoin: {
    header: 'Thenga Ibitcoin',
    tap_your_address: 'Thepha idilesi yakho ukuyikopisha kwi-clipboard:',
    copied: 'Ikhutshelwe kwi-clipboard!',
  },
  settings: {
    general: 'General',
    header: 'Izicwangciso',
    plausible_deniability: 'Ukuphika...',
    storage_not_encrypted: 'Ukugciwa: hayi ngekhodi',
    storage_encrypted: 'Ukugciwa: ngekhodi',
    password: 'Inombolo yokuvula',
    password_explain: 'Ukudala iinombolo yokuvula oyisebenzisayo ukucima ukugcina',
    retype_password: 'Phina inombolo yokuvula',
    passwords_do_not_match: 'Inombolo yokuvula azifani',
    encrypt_storage: 'Kubhala u kubhala',
    lightning_settings: 'Izixhobo zokukhanyisa',
    lightning_settings_explain:
      'Ukuxhuma kwi-node yakho ye-LND nceda ufake iLndHub' +
      ' kwaye ufake iURL apha izicwangciso. Shiya kungenanto yokusebenzisa iLndHub (Indhub.io)',
    electrum_settings: 'Electrum Settings',
    electrum_settings_explain: 'Set to blank to use default',
    save: 'ndoloza',
    about: 'Malunga',
    language: 'Ulwimi',
    currency: 'Lwemali',
    advanced_options: 'Advanced Options',
    enable_advanced_mode: 'Enable advanced mode',
    advanced_mode_note: 'When enabled, you will be able to view selected wallets, and transactions, using your other Apple iCloud connected devices.',
  },
  plausibledeniability: {
    title: 'Ukuphika',
    help:
      'Phantsi kweemeko unokunyaneliswa ukuba uchaze a ' +
      'inombolo yokuvula. KevaWallet ukugcina imali yakho ikhuselekile, unokudala enye ' +
      'ukugcinwa kwekhowudi, ngegama eligqithisiweyo. Phantsi kwefuthe, ' +
      'unako ukutyhila le phasiwedi kumntu wesithatu. Ukuba ungenayo ' +
      'KevaWallet, iya kuvula ukugcinwa kwetyala ‘entsha’. Oku kuya kubonakala ' +
      'Umlenze kumntu wesithathu kodwa uza kugcina ngasese ukugcinwa kwakho ' +
      'ngemali ekhuselekile..',
    help2:
      'Igumbi lokugcina elitsha liza kusebenza ngokupheleleyo, kwaye unako ukugcina okunye ‘ + ‘lxabiso elincinci apho likhangeleka ngakumbi.',
    create_fake_storage: 'Ukudala igumbi lokugcina elifihlakeleyo',
    go_back: 'Buya Umva',
    create_password: 'Yenza inombolo yokuvula',
    create_password_explanation:
      'Inombolo yakho yokuvula igumbi  lokugcina inkohliso akumele ifane ne nombolo yokuvula  igumbi lakho  elinyanisekileyo',
    password_should_not_match:
      'Inombolo yakho yokuvula igumbi  lokugcina inkohliso akumele ifane ne nombolo yokuvula  igumbi lakho  elinyanisekileyo',
    retype_password: 'Phinda inombolo yokuvula',
    passwords_do_not_match: 'Inombolo yokuvula ayihambelani, zama kwakhona',
    success: 'Iphumelele',
  },
  lnd: {
    title: 'lawula imali',
    choose_source_wallet: 'Ukhethe ingxowa yomthombo',
    refill_lnd_balance: 'Gcwalisa ingxowa yakho yemali',
    refill: 'Gcwalisa',
    withdraw: 'Khupha imali',
    expired: 'Iphelewe lixesha',
    placeholder: 'Invoyisi',
    sameWalletAsInvoiceError: ': Awukwazi ukuhlawula i-invoyisi kunye ngengxowa oyisebenzisile ukudala  leyo invoyisi.',
  },
  pleasebackup: {
    title: 'Your wallet is created...',
    text:
      "Please take a moment to write down this mnemonic phrase on a piece of paper. It's your backup you can use to restore the wallet on other device.",
    ok: 'OK, I wrote this down!',
  },
  lndViewInvoice: {
    wasnt_paid_and_expired: 'This invoice was not paid for and has expired',
    has_been_paid: 'This invoice has been paid for',
    please_pay: 'Please pay',
    sats: 'sats',
    for: 'For:',
    additional_info: 'Additional Information',
    open_direct_channel: 'Open direct channel with this node:',
  },
};
