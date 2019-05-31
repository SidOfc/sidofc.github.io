(window.webpackJsonp=window.webpackJsonp||[]).push([["370d"],{"+1e7":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/a-collection-of-vim-key-binds",function(){var e=t("Ttme");return{page:e.default||e}}])},Ttme:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",function(){return s}),t.d(n,"default",function(){return m});var a=t("kOwS"),o=t("qNsG"),i=(t("q1tI"),t("E/Ix")),r=t("dBck"),p=t("SEsP"),s={title:"A collection of Vim key binds",author:"Sidney Liebrand",date:"16-09-2017 13:11:03",excerpt:"In my never ending quest for an optimal Vim setup I am always looking for ways to improve. I’ve used Vim for about two months now and I’m still learning a lot. In this post I‘m going to take you through a part of my .vimrc that describes my non-plugin key binds.",words:1495},b={meta:s},l="wrapper";function m(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)(l,Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)(r.b,Object(a.a)({},s,{mdxType:"Title"})),Object(i.b)(p.v,{wide:!0,mdxType:"VimrcMovementKeyBinds"}),Object(i.b)("p",null,"Vim is installed on almost every unix system known to man,\ntherefore knowing how it works will allow you to work pretty much anywhere.\nWhy would you create customized mappings that only work on your machine?"),Object(i.b)("h2",null,"Ease of use"),Object(i.b)("p",null,"Key binds in Vim are not always the most intuitive to use.\nTake for instance, moving up or down a paragraph which are bound to ",Object(i.b)("inlineCode",{parentName:"p"},"{")," and ",Object(i.b)("inlineCode",{parentName:"p"},"}")," respectively.\nI find these binds quite awkward, but like ",Object(i.b)("inlineCode",{parentName:"p"},"w"),", they allow you to move a lot faster\nthan using line wise ",Object(i.b)("inlineCode",{parentName:"p"},"j")," or ",Object(i.b)("inlineCode",{parentName:"p"},"k"),". For that reason, I rebound them to ",Object(i.b)("inlineCode",{parentName:"p"},"J")," and ",Object(i.b)("inlineCode",{parentName:"p"},"K")," instead (note their case).\nSince they apply no useful action in normal mode and they are more easily combined with the ",Object(i.b)("kbd",null,"shift"),"\nkey than ",Object(i.b)("inlineCode",{parentName:"p"},"{")," and ",Object(i.b)("inlineCode",{parentName:"p"},"}")," it made sense to me to map them to something easier to reach."),Object(i.b)("h2",null,"Consistency"),Object(i.b)("p",null,"Some of the key binds are actually inconsistent. Given that there is ",Object(i.b)("inlineCode",{parentName:"p"},"D")," for deleting from cursor to\nend of line and ",Object(i.b)("inlineCode",{parentName:"p"},"C")," to change from cursor to end of line, but for some reason, ",Object(i.b)("inlineCode",{parentName:"p"},"Y"),' does not share the\n"from cursor to end of line" behavior. We can fix this by overwriting the map and binding ',Object(i.b)("inlineCode",{parentName:"p"},"Y")," to ",Object(i.b)("inlineCode",{parentName:"p"},"y$"),"\ninstead (visit ",Object(i.b)("inlineCode",{parentName:"p"},":h Y")," in Vim), which ",Object(i.b)("em",{parentName:"p"},"will")," make it copy from cursor to end of line."),Object(i.b)("h2",null,"End bad habits"),Object(i.b)("p",null,"Vim will definitely put an end to at least ",Object(i.b)("em",{parentName:"p"},"most")," of your bad habits. Using the arrow keys to\nmove around is generally considered a bad thing in my opinion since you have to move your hand\naway from the home row of your keyboard. Therefore you can unbind them by setting them do do nothing.\nThe next time you press such key, it will simply... ",Object(i.b)("em",{parentName:"p"},"do nothing")," and your brain will rewire itself\nbased on the negative impulse :)"),Object(i.b)("h2",null,"My key binds"),Object(i.b)("p",null,"So without further ado, here are my non-plugin key binds."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Pairing braces")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-vim"}),"inoremap <> <><Left>\ninoremap () ()<Left>\ninoremap {} {}<Left>\ninoremap [] []<Left>\ninoremap \"\" \"\"<Left>\ninoremap '' ''<Left>\ninoremap `` ``<Left>\n")),Object(i.b)("p",null,"The way I type braces might be weird, but I like it. Basically, whenever I type an opening brace or quote,\nI close it off and move my cursor between them. This ensures that I always have matching braces and I don't\nactually have to go back and add them later (especially useful in nesting situations)."),Object(i.b)("p",null,"What this does is when you type ",Object(i.b)("inlineCode",{parentName:"p"},"<")," followed by ",Object(i.b)("inlineCode",{parentName:"p"},">"),' for example, vim will replace it with the same characters,\nbut it will also "insert" ',Object(i.b)("inlineCode",{parentName:"p"},"<Left>")," or rather, insert an arrow keypress left which leaves you in this position:\n",Object(i.b)("inlineCode",{parentName:"p"},"<|>")," where the bar represents the cursor. You can now type away without having to worry about that closing brace!"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Navigational keys")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-vim"}),"nmap <Up>    <Nop>\nnmap <Down>  <Nop>\nnmap <Left>  <Nop>\nnmap <Right> <Nop>\n\nmap $ <Nop>\nmap ^ <Nop>\nmap { <Nop>\nmap } <Nop>\n\nnoremap K     {\nnoremap J     }\nnoremap H     ^\nnoremap L     $\nnoremap <C-x> :bp<Bar>bd #<Cr>\n")),Object(i.b)("p",null,"I’ve already discussed the keys ",Object(i.b)("inlineCode",{parentName:"p"},"J")," and ",Object(i.b)("inlineCode",{parentName:"p"},"K")," which are used for moving up and down by paragraph.\nLikewise ",Object(i.b)("inlineCode",{parentName:"p"},"H")," maps to ",Object(i.b)("inlineCode",{parentName:"p"},"^")," which takes you to the first ",Object(i.b)("em",{parentName:"p"},"non-whitespace")," character of the current line\nand ",Object(i.b)("inlineCode",{parentName:"p"},"L")," maps to ",Object(i.b)("inlineCode",{parentName:"p"},"$")," which takes you to the ",Object(i.b)("em",{parentName:"p"},"end")," of the current line.\nI like to think of these mappings as stronger versions of the regular ",Object(i.b)("inlineCode",{parentName:"p"},"h"),", ",Object(i.b)("inlineCode",{parentName:"p"},"j"),", ",Object(i.b)("inlineCode",{parentName:"p"},"k"),", ",Object(i.b)("inlineCode",{parentName:"p"},"l")," motions in Vim."),Object(i.b)("p",null,"The last mapping to discuss here is ",Object(i.b)("inlineCode",{parentName:"p"},"<C-x>"),". What this does is open the previous buffer in the current\npane and close the buffer visible before that. This means that if I open ",Object(i.b)("inlineCode",{parentName:"p"},"filea.txt")," and then open\n",Object(i.b)("inlineCode",{parentName:"p"},"fileb.txt")," in the same pane, pressing ",Object(i.b)("inlineCode",{parentName:"p"},"<C-x>")," will show me filea.txt and close the buffer containing ",Object(i.b)("inlineCode",{parentName:"p"},"fileb.txt"),".\nI like this because I work with split panes a lot and I don't always want my split to disappear when\nI'm done working with a file. Now it will show me the file I had open before that."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Insert mode navigational keys")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-vim"}),"imap <Up>    <Nop>\nimap <Down>  <Nop>\nimap <Left>  <Nop>\nimap <Right> <Nop>\n\ninoremap <C-k> <Up>\ninoremap <C-j> <Down>\ninoremap <C-h> <Left>\ninoremap <C-l> <Right>\n")),Object(i.b)("p",null,"These ones are very new to me and I have only added them recently. I’m still thinking that when I\ndid this about a month ago, I was completely and utterly disoriented without the arrow keys in insert mode.\nI simply didn’t understand how to move out of some situations in insert mode and I hadn’t discovered ",Object(i.b)("inlineCode",{parentName:"p"},"<C-o>")," yet either.\nI ended up using the hjkl combo I knew for moving around and prefixing it with control,\nso in insert mode, ",Object(i.b)("inlineCode",{parentName:"p"},"<C-l>")," moves me one character to the right, as ",Object(i.b)("inlineCode",{parentName:"p"},"l")," would do in normal mode."),Object(i.b)("p",null,"Insert mode is not really the mode you want to be in most of the time, unless you are actually writing code that is.\nBut it is annoying to have to switch out of insert mode ",Object(i.b)("em",{parentName:"p"},"just")," to use a normal mode command to move to the right place.\nI found that using ",Object(i.b)("inlineCode",{parentName:"p"},"<C-o>")," followed by a command used too many keypresses for the same operation and thus I\nended up with the ",Object(i.b)("inlineCode",{parentName:"p"},"<C-[direction]>")," keys for movement in insert mode."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Tab and Shift-Tab to indent and de-indent")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-vim"}),"nmap >> <Nop>\nnmap << <Nop>\nvmap >> <Nop>\nvmap << <Nop>\n\nnnoremap <Tab>   >>\nnnoremap <S-Tab> <<\nvnoremap <Tab>   >><Esc>gv\nvnoremap <S-Tab> <<<Esc>gv\n")),Object(i.b)("p",null,"Yet another pair of inconvenient binds are used for indenting and de-indenting code, ",Object(i.b)("inlineCode",{parentName:"p"},">>")," and ",Object(i.b)("inlineCode",{parentName:"p"},"<<")," respectively.\nLike with the default paragraph binds I think these can be better by just using the bindings I already know and use:\n",Object(i.b)("inlineCode",{parentName:"p"},"<Tab>")," and ",Object(i.b)("inlineCode",{parentName:"p"},"<S-Tab>"),". These binds are to be used in normal or visual mode as we have a special purpose for ",Object(i.b)("inlineCode",{parentName:"p"},"<S-Tab>")," in insert mode."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Avoiding the Esc key")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-vim"}),"inoremap <S-Tab> <Esc>\nonoremap <S-Tab> <Esc>\n")),Object(i.b)("p",null,"While there is no such real thing like completely avoiding the escape key, I can manage pretty\nwell without it with these simple binds. The first one will take you out of insert mode when\nyou hit ",Object(i.b)("inlineCode",{parentName:"p"},"<S-Tab>"),". Since it does nothing useful, it might as well save one of my fingers some serious wear.\nThe second map is used in operator pending mode, which is when you say ",Object(i.b)("inlineCode",{parentName:"p"},"d3"),",\nthe next thing that follows is the operator to finish the command. This means that if I press ",Object(i.b)("inlineCode",{parentName:"p"},"d3<S-Tab>"),"\nI will no longer be in operator pending mode, handy for when you accidentally typed ",Object(i.b)("inlineCode",{parentName:"p"},"4")," instead of ",Object(i.b)("inlineCode",{parentName:"p"},"3"),"\n(while you don’t ",Object(i.b)("em",{parentName:"p"},"see")," this, you just ",Object(i.b)("em",{parentName:"p"},"feel")," it)."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Run macro’s with Q")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-vim"}),"nnoremap Q @q\n")),Object(i.b)("p",null,"This one is a bit different, I’m not unbinding ",Object(i.b)("inlineCode",{parentName:"p"},"@q")," here as I simply ",Object(i.b)("em",{parentName:"p"},"don’t have to"),". The clumsiness of this\nbind leads me to never accidentally press it anyway. To explain, for recording a macro use ",Object(i.b)("inlineCode",{parentName:"p"},"qq"),",\nto stop recording use ",Object(i.b)("inlineCode",{parentName:"p"},"q")," and to play it, simply use ",Object(i.b)("inlineCode",{parentName:"p"},"Q")," ","—"," much better than pressing ",Object(i.b)("inlineCode",{parentName:"p"},"@q"),".\nNote that this might not be handy if you use a lot of macros and registers.\nI mostly remember and use one macro at a time for the moment so this bind fits my needs."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Consistent Y")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-vim"}),"nnoremap Y y$\n")),Object(i.b)("p",null,"So unlike our friends ",Object(i.b)("inlineCode",{parentName:"p"},"C")," and ",Object(i.b)("inlineCode",{parentName:"p"},"D")," which change and delete ",Object(i.b)("em",{parentName:"p"},"from cursor to end of line")," respectively,\n",Object(i.b)("inlineCode",{parentName:"p"},"Y")," seems to have some issues, it basically does a ",Object(i.b)("inlineCode",{parentName:"p"},"yy")," which we already have... ",Object(i.b)("inlineCode",{parentName:"p"},"yy")," for. So to make it consistent with its bro’s,\nI remapped it to ",Object(i.b)("inlineCode",{parentName:"p"},"y$"),". Additional explanation can be found in the help section: ",Object(i.b)("inlineCode",{parentName:"p"},":h Y"),"."),Object(i.b)("h2",null,"Wrapping up"),Object(i.b)("p",null,"I hope you found some useful binds in between, or a useful context with which you can create such mappings yourself.\nThese are my vanilla key binds so they should work in your .vimrc too, no plugins required.\nVim is a blast to work in and it is ",Object(i.b)("em",{parentName:"p"},"by far")," the most flexible text editor I’ve used. It allows me to spend my days in\na terminal with joy and helps me work faster than I could with any conventional text editor.\nCustom key binds were not my first goal but as I started to get more comfortable I found some things to be awkward.\nIt is the process of finding and removing these awkward binds and turning them into something useful that will\ntransform you into a text editing machine."),Object(i.b)("p",null,"Happy Vimming :)"),Object(i.b)("p",null,"👋"))}m.isMDXComponent=!0}},[["+1e7","5d41","9da1"]]]);