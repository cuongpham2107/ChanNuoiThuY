import{c as e,g as a,b as t}from"./browser-d96520d8.js";import{s as r}from"./dom-39effdbe.js";var c=e((function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.EncodeUtils=void 0;var t=function(){function e(){}return e.encodeHtml=function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},e.decodeHtml=function(e){return e.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">")},e.prepareTextForRequest=function(e){return e.replace(/%/g,"%25").replace(/&/g,"%26amp;").replace(/\+/g,"%2B").replace(/</g,"%26lt;").replace(/>/g,"%26gt;").replace(/"/g,"%26quot;")},e.prepareTextForCallBackRequest=function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},e.decodeViaTextArea=function(e){var a=document.createElement("TEXTAREA");return a.innerHTML=e,a.value},e}();a.EncodeUtils=t}));a(c);const o=c;var n=e((function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.KeyCode=a.ModifierKey=a.KeyUtils=void 0;var c,n,s=function(){function e(){}return e.getKeyModifiers=function(e){var a=0;return e.altKey&&(a|=c.Alt),e.ctrlKey&&(a|=c.Ctrl),e.shiftKey&&(a|=c.Shift),e.metaKey&&(a|=c.Meta),a},e.getShortcutCode=function(e,a,t,r,o){var n=e;return n|=a?c.Ctrl:0,n|=t?c.Shift:0,n|=r?c.Alt:0,n|=o?c.Meta:0},e.getShortcutCodeByEvent=function(a){return e.getShortcutCode(e.getEventKeyCode(a),a.ctrlKey,a.shiftKey,a.altKey,!!t.Browser.MacOSPlatform&&a.metaKey)},e.getEventKeyCode=function(e){return t.Browser.NetscapeFamily||t.Browser.Opera?e.which:e.keyCode},e.parseShortcutString=function(a){if(!a)return 0;var t=!1,c=!1,s=!1,y=!1,_=null,K=a.toString().split("+");if(K.length>0)for(var l=0;l<K.length;l++){var u=r.StringUtils.trim(K[l].toUpperCase());switch(u){case"CONTROL":case"CONTROLKEY":case"CTRL":t=!0;break;case"SHIFT":case"SHIFTKEY":c=!0;break;case"ALT":s=!0;break;case"CMD":y=!0;break;case"F1":_=n.F1;break;case"F2":_=n.F2;break;case"F3":_=n.F3;break;case"F4":_=n.F4;break;case"F5":_=n.F5;break;case"F6":_=n.F6;break;case"F7":_=n.F7;break;case"F8":_=n.F8;break;case"F9":_=n.F9;break;case"F10":_=n.F10;break;case"F11":_=n.F11;break;case"F12":_=n.F12;break;case"RETURN":case"ENTER":_=n.Enter;break;case"HOME":_=n.Home;break;case"END":_=n.End;break;case"LEFT":_=n.Left;break;case"RIGHT":_=n.Right;break;case"UP":_=n.Up;break;case"DOWN":_=n.Down;break;case"PAGEUP":_=n.PageUp;break;case"PAGEDOWN":_=n.PageDown;break;case"SPACE":_=n.Space;break;case"TAB":_=n.Tab;break;case"BACKSPACE":case"BACK":_=n.Backspace;break;case"CONTEXT":_=n.ContextMenu;break;case"ESCAPE":case"ESC":_=n.Esc;break;case"DELETE":case"DEL":_=n.Delete;break;case"INSERT":case"INS":_=n.Insert;break;case"PLUS":_="+".charCodeAt(0);break;default:_=u.charCodeAt(0)}}else alert(o.EncodeUtils.decodeViaTextArea("Invalid shortcut"));return e.getShortcutCode(_,t,c,s,y)},e}();a.KeyUtils=s,function(e){e[e.None=0]="None",e[e.Ctrl=65536]="Ctrl",e[e.Shift=262144]="Shift",e[e.Alt=1048576]="Alt",e[e.Meta=16777216]="Meta"}(c=a.ModifierKey||(a.ModifierKey={})),function(e){e[e.Backspace=8]="Backspace",e[e.Tab=9]="Tab",e[e.Enter=13]="Enter",e[e.Pause=19]="Pause",e[e.CapsLock=20]="CapsLock",e[e.Esc=27]="Esc",e[e.Space=32]="Space",e[e.PageUp=33]="PageUp",e[e.PageDown=34]="PageDown",e[e.End=35]="End",e[e.Home=36]="Home",e[e.Left=37]="Left",e[e.Up=38]="Up",e[e.Right=39]="Right",e[e.Down=40]="Down",e[e.Insert=45]="Insert",e[e.Delete=46]="Delete",e[e.Key_0=48]="Key_0",e[e.Key_1=49]="Key_1",e[e.Key_2=50]="Key_2",e[e.Key_3=51]="Key_3",e[e.Key_4=52]="Key_4",e[e.Key_5=53]="Key_5",e[e.Key_6=54]="Key_6",e[e.Key_7=55]="Key_7",e[e.Key_8=56]="Key_8",e[e.Key_9=57]="Key_9",e[e.Key_a=65]="Key_a",e[e.Key_b=66]="Key_b",e[e.Key_c=67]="Key_c",e[e.Key_d=68]="Key_d",e[e.Key_e=69]="Key_e",e[e.Key_f=70]="Key_f",e[e.Key_g=71]="Key_g",e[e.Key_h=72]="Key_h",e[e.Key_i=73]="Key_i",e[e.Key_j=74]="Key_j",e[e.Key_k=75]="Key_k",e[e.Key_l=76]="Key_l",e[e.Key_m=77]="Key_m",e[e.Key_n=78]="Key_n",e[e.Key_o=79]="Key_o",e[e.Key_p=80]="Key_p",e[e.Key_q=81]="Key_q",e[e.Key_r=82]="Key_r",e[e.Key_s=83]="Key_s",e[e.Key_t=84]="Key_t",e[e.Key_u=85]="Key_u",e[e.Key_v=86]="Key_v",e[e.Key_w=87]="Key_w",e[e.Key_x=88]="Key_x",e[e.Key_y=89]="Key_y",e[e.Key_z=90]="Key_z",e[e.Windows=91]="Windows",e[e.ContextMenu=93]="ContextMenu",e[e.Numpad_0=96]="Numpad_0",e[e.Numpad_1=97]="Numpad_1",e[e.Numpad_2=98]="Numpad_2",e[e.Numpad_3=99]="Numpad_3",e[e.Numpad_4=100]="Numpad_4",e[e.Numpad_5=101]="Numpad_5",e[e.Numpad_6=102]="Numpad_6",e[e.Numpad_7=103]="Numpad_7",e[e.Numpad_8=104]="Numpad_8",e[e.Numpad_9=105]="Numpad_9",e[e.Multiply=106]="Multiply",e[e.Add=107]="Add",e[e.Subtract=109]="Subtract",e[e.Decimal=110]="Decimal",e[e.Divide=111]="Divide",e[e.F1=112]="F1",e[e.F2=113]="F2",e[e.F3=114]="F3",e[e.F4=115]="F4",e[e.F5=116]="F5",e[e.F6=117]="F6",e[e.F7=118]="F7",e[e.F8=119]="F8",e[e.F9=120]="F9",e[e.F10=121]="F10",e[e.F11=122]="F11",e[e.F12=123]="F12",e[e.NumLock=144]="NumLock",e[e.ScrollLock=145]="ScrollLock",e[e.Semicolon=186]="Semicolon",e[e.Equals=187]="Equals",e[e.Comma=188]="Comma",e[e.Dash=189]="Dash",e[e.Period=190]="Period",e[e.ForwardSlash=191]="ForwardSlash",e[e.GraveAccent=192]="GraveAccent",e[e.OpenBracket=219]="OpenBracket",e[e.BackSlash=220]="BackSlash",e[e.CloseBracket=221]="CloseBracket",e[e.SingleQuote=222]="SingleQuote"}(n=a.KeyCode||(a.KeyCode={}))}));a(n);export{n as k};