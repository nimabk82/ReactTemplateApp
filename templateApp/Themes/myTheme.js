import Color from 'color';

import {Platform} from 'react-native';

export default {

    // Badge
    badgeBg: '#ED1727',
    badgeColor: '#fff',


    // Button
    btnFontFamily: (Platform.OS === 'ios' ) ? 'HelveticaNeue' : 'Roboto_medium',
    btnDisabledBg: '#b5b5b5',
    btnDisabledClr: '#f1f1f1',

    get btnPrimaryBg () {
        return this.brandPrimary;
    },
    get btnPrimaryColor () {
        return this.inverseTextColor;
    },
    get btnInfoBg () {
        return this.brandInfo;
    },
    get btnInfoColor () {
        return this.inverseTextColor;
    },
    get btnSuccessBg () {
        return this.brandSuccess;
    },
    get btnSuccessColor () {
        return this.inverseTextColor;
    },
    get btnDangerBg () {
        return this.brandDanger;
    },
    get btnDangerColor () {
        return this.inverseTextColor;
    },
    get btnWarningBg () {
        return this.brandWarning;
    },
    get btnWarningColor () {
        return this.inverseTextColor;
    },

    //nima
    get btnTextSize () {
        return (Platform.OS==='ios') ? this.fontSizeBase* 1.1 :
            this.fontSizeBase*1.2;
           // this.fontSizeBase-1;
    },
    get btnTextSizeLarge () {
        return this.fontSizeBase* 1.5;
    },
    get btnTextSizeSmall () {
        return this.fontSizeBase* .8;
    },
    get borderRadiusLarge () {
        return this.fontSizeBase* 3.8;
    },

    //nima
    // buttonPadding: 0,
    buttonPadding: 6,

    get iconSizeLarge () {
        return this.iconFontSize* 1.5;
    },
    get iconSizeSmall () {
        return this.iconFontSize* .6;
    },


    // Card
    cardDefaultBg: '#fff',


    // Check Box
    checkboxBgColor: '#039BE5',
    checkboxSize: 23,
    checkboxTickColor: '#fff',


    // Color
    brandPrimary : '#5067FF',
    brandInfo: '#5bc0de',
    brandSuccess: '#5cb85c',
    brandDanger: '#d9534f',
    brandWarning: '#f0ad4e',
    brandSidebar: '#252932',


    // Font
    fontFamily: (Platform.OS === 'ios' ) ? 'HelveticaNeue' : 'Roboto',
    fontSizeBase: 15,

    get fontSizeH1 () {
        return this.fontSizeBase*1.8;
    },
    get fontSizeH2 () {
        return this.fontSizeBase* 1.6;
    },
    get fontSizeH3 () {
        return this.fontSizeBase* 1.4;
    },


    // Footer

    //nima
    // footerHeight: 60,
    footerHeight: 55,
    footerDefaultBg: (Platform.OS === 'ios' ) ? '#F3F7F0' : '#F3F7F0',


    //FooterTab
    tabBarTextColor: (Platform.OS === 'ios' ) ? '#B4B4B4' : '#B4B4B4',
    tabBarActiveTextColor: (Platform.OS === 'ios' ) ? '#007aff' : '#fff',
    tabActiveBgColor: (Platform.OS=='ios') ? '#cde1f9' : undefined,
    tabActiveBorderRadius: (Platform.OS=='ios') ? 7 : undefined,

    //Tab
    tabDefaultBg: (Platform.OS === 'ios' ) ? '#F8F8F8' : '#4179F7',
    topTabBarTextColor: (Platform.OS === 'ios' ) ? '#6b6b6b' : '#b3c7f9',
    topTabBarActiveTextColor: (Platform.OS === 'ios' ) ? '#007aff' : '#fff',
    topTabActiveBgColor: (Platform.OS=='ios') ? '#cde1f9' : undefined,
    topTabBarBorderColor: (Platform.OS === 'ios' ) ? '#007aff' : '#fff',
    //nima
    tabBarTextSize:  (Platform.OS=='ios') ? 12.5 : 11,
    tabBarActiveTextSize:  (Platform.OS=='ios') ? 12.5 : 11,


    // Header
    iosToolbarBtnColor: '#007aff',
    toolbarDefaultBg: (Platform.OS === 'ios' ) ? '#F8F8F8' : '#4179F7',
    toolbarHeight: (Platform.OS === 'ios' ) ? 64 : 56,
    toolbarIconSize: (Platform.OS === 'ios' ) ? 20 : 22,
    toolbarInputColor: '#CECDD2',
    toolbarInverseBg: '#222',
    toolbarTextColor: (Platform.OS==='ios') ? '#000' : '#fff',
    get statusBarColor() {
        return Color(this.toolbarDefaultBg).darken(0.2).hexString();
    },


    // Icon
    iconFamily: 'Ionicons',
    //nima
    iconFontSize: (Platform.OS === 'ios' ) ? 30 : 36,
    // iconFontSize: (Platform.OS === 'ios' ) ? 30 : 28,
    iconMargin: 8, //nima 0


    // InputGroup
    inputFontSize: 15,
    inputBorderColor: '#D9D5DC',
    inputSuccessBorderColor: '#2b8339',
    inputErrorBorderColor: '#ed2f2f',

    get inputColor () {
        return this.textColor;
    },
    get inputColorPlaceholder () {
        return '#575757';
    },

    inputGroupMarginBottom: 10,
    inputHeightBase: 40,
    inputPaddingLeft: 5,

    get inputPaddingLeftIcon () {
        return this.inputPaddingLeft* 8;
    },


    // Line Height
    btnLineHeight: 25,
    lineHeightH1: 32,
    lineHeightH2: 27,
    lineHeightH3: 22,
    iconLineHeight: (Platform.OS === 'ios' ) ? 37 : 37, //nima 30
    lineHeight: (Platform.OS === 'ios' ) ? 20 : 24,


    // List
    listBorderColor: '#ddd',
    listDividerBg: '#ddd',
    listItemHeight: 45,
    listItemPadding: (Platform.OS === 'ios' ) ? 12 : 16,
    listNoteColor: '#808080',
    listNoteSize: 13,


    // Progress Bar
    defaultProgressColor: '#E4202D',
    inverseProgressColor: '#1A191B',


    // Radio Button
    radioBtnSize: (Platform.OS === 'ios') ? 25 : 23,
    radioColor: '#7e7e7e',

    get radioSelectedColor() {
        return Color(this.radioColor).darken(0.2).hexString();
    },


    // Spinner
    defaultSpinnerColor: '#45D56E',
    inverseSpinnerColor: '#1A191B',


    // Tabs
    tabBgColor: '#F8F8F8',
    tabFontSize: 15,
    tabTextColor: '#222222',


    // Text
    textColor: '#000',
    inverseTextColor: '#fff',


    // Title
    titleFontSize: (Platform.OS === 'ios' ) ? 17 : 19,
    subTitleFontSize: (Platform.OS === 'ios' ) ? 12 : 14,
    subtitleColor: '#8e8e93',


    // Other
    borderRadiusBase: (Platform.OS === 'ios' ) ? 5 : 2,
    borderWidth: 1,
    contentPadding: 10,

    get darkenHeader() {
        return Color(this.tabBgColor).darken(0.03).hexString();
    },

    dropdownBg: '#000',
    dropdownLinkColor: '#414142',
    inputLineHeight: 24,
    jumbotronBg: '#C9C9CE',
    jumbotronPadding: 30
}
