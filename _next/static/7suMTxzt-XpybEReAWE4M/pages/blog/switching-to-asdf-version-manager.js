(window.webpackJsonp=window.webpackJsonp||[]).push([["660b"],{"2loc":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/switching-to-asdf-version-manager",function(){var e=n("KAt/");return{page:e.default||e}}])},"KAt/":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",function(){return r}),n.d(t,"default",function(){return d});var a=n("kOwS"),o=n("qNsG"),i=(n("q1tI"),n("E/Ix")),s=n("dBck"),l=n("SEsP"),r={title:"Switching to ASDF version manager",author:"Sidney Liebrand",date:"15-08-2017 21:04:44",excerpt:"Depending on how many languages you program in, getting all their version managers installed, added to <code>$PATH</code>, configured etc... becomes quite a pain when setting up a new system, or even figuring out how this one works because you've used something else for a while.",words:1059},b={meta:r},c="wrapper";function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(c,Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(s.b,Object(a.a)({},r,{mdxType:"Title"})),Object(i.b)(l.a,{mdxType:"AsdfMovieBanner"}),Object(i.b)("p",null,"Version management tools for programming languages are a common thing in (web-)developer land.\nI started to wonder if there was an all-in-one version management tool.\nI want this because as I learn more and do more, I will need more version managers that all\nslow down my shell. So lets prevent that shall we!"),Object(i.b)("p",null,"I've always used ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://rvm.io"}),"RVM")," in the past without problem, the shell took about half a\nsecond to load and that was acceptable. I mean, you can't have it all right :)"),Object(i.b)("p",null,"Aside from sourcing good old RVM, recently I also added ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/creationix/nvm"}),"NVM"),' to the stack.\nNo problem I thought! Until I resourced my shell and had to wait for two seconds... Yeah,\nthis goes beyond the "you can\'t have it all" criteria. I often open a shell for a quick ssh session,\nrunning tests, git commands, etc... There has to be a better way!'),Object(i.b)("h2",null,"A universal version manager"),Object(i.b)("p",null,"Enter ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/asdf-vm/asdf"}),"ASDF")," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/asdf-vm/asdf-plugins"}),"friends"),".\nASDF is a universal and extensible version management tool for many ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/asdf-vm/asdf-plugins"}),"programming languages"),".\nIt provides the version management tooling and allows you to choose which plugins you would like to install.\nLike Node.js, Ruby or Python for instance."),Object(i.b)("p",null,"To get started, go to their ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/asdf-vm/asdf"}),"github page")," and install ASDF."),Object(i.b)("p",null,"After installing, you'll only have the core of ASDF.\nWe'll need to extend it by adding plugins to it and using those to install versions\nof the language we want to use."),Object(i.b)("p",null,"The list of plugins you'll install will differ from what I use.\nI am a front end developer that works with Ruby / Rails as well as React.\nFrom time to time I also muck around in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://crystal-lang.org/"}),"Crystal")," or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.rust-lang.org/en-US/"}),"Rust"),"\n(both of which are awesome ","—"," check them out!). So I would head to the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/asdf-vm/asdf-plugins"}),"plugins page"),"\nand look for plugins for those programming languages. The following is what I use:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/asdf-vm/asdf-ruby"}),"asdf-vm/asdf-ruby"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/asdf-vm/asdf-nodejs"}),"asdf-vm/asdf-nodejs"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/code-lever/asdf-rust"}),"code-lever/asdf-rust"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://marciogm/asdf-crystal"}),"marciogm/asdf-crystal")))),Object(i.b)("p",null,"There are installation instructions on every plugin repo. Sometimes, steps\nfor migrating from your old version manager are also included.\nFor Ruby using RVM, the migration is as easy as moving ",Object(i.b)("inlineCode",{parentName:"p"},"~/.rvm/rubies")," to ",Object(i.b)("inlineCode",{parentName:"p"},"~/.asdf/installs/ruby.")),Object(i.b)("h2",null,"Sounds smooth, any bumps along the way?"),Object(i.b)("p",null,"It could be that gems and even Ruby versions will not work. If you run into this issue,\nrun ",Object(i.b)("inlineCode",{parentName:"p"},"asdf reshim [language]")," and restart your shell to fix any broken paths."),Object(i.b)("p",null,"If the problem persists, you can run ",Object(i.b)("inlineCode",{parentName:"p"},"asdf current [language]")," to find the current version.\nIt will also print the path to the version file that defined it.\nThis is much simpler than running a mixture of ",Object(i.b)("inlineCode",{parentName:"p"},"ls")," and ",Object(i.b)("inlineCode",{parentName:"p"},"grep")," to find out where that version comes from."),Object(i.b)("p",null,"If you see the following after running ",Object(i.b)("inlineCode",{parentName:"p"},"asdf current [language]"),":"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"No version set for ","[language]")),Object(i.b)("p",null,"It means that you haven't set or installed any versions for that language.\nIf you haven't installed a version, run ",Object(i.b)("inlineCode",{parentName:"p"},"asdf list-all [language]"),".\nThis will list all the available versions that ASDF can install. Choose a version and run\n",Object(i.b)("inlineCode",{parentName:"p"},"asdf install [language] [version]")," to install it."),Object(i.b)("p",null,"If the plugin still doesn't work, run ",Object(i.b)("inlineCode",{parentName:"p"},"asdf global [language] [version]")," which will create a ",Object(i.b)("inlineCode",{parentName:"p"},"~/.tool-versions")," file.\nThe language and version info will be stored and ASDF will attempt to load that version."),Object(i.b)("p",null,"To set a specific version in a directory, ",Object(i.b)("inlineCode",{parentName:"p"},"cd")," to it and run\n",Object(i.b)("inlineCode",{parentName:"p"},"asdf local [language] [version]"),". ASDF will use a local version over a global version."),Object(i.b)("p",null,"After migrating from RVM, I had to rename my rubies.\nRVM stored them in the format of ",Object(i.b)("inlineCode",{parentName:"p"},"ruby-[major]-[minor]-[patch]-p[ruby-patch]"),".\nThis caused ASDF not to switch after running ",Object(i.b)("inlineCode",{parentName:"p"},"asdf local ruby 2.4.1")," because the folder\nname differed from the version input. Which meant I had to run ",Object(i.b)("inlineCode",{parentName:"p"},"asdf local ruby ruby-2.4.1"),".\nIf a language is already specified, I'd rather not bother typing it again.\nRemoving the ",Object(i.b)("inlineCode",{parentName:"p"},"ruby-")," prefix from the directory names in ",Object(i.b)("inlineCode",{parentName:"p"},"~/.asdf/installs/ruby")," fixed it.\nRunning ",Object(i.b)("inlineCode",{parentName:"p"},"asdf local ruby 2.4.1")," switched perfect afterwards."),Object(i.b)("h2",null,"Extra's"),Object(i.b)("p",null,"A feature of the ",Object(i.b)("inlineCode",{parentName:"p"},"asdf-ruby")," plugin is that it can install a set of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/asdf-vm/asdf-ruby#default-gems"}),"default gems"),"\nspecified in a ",Object(i.b)("inlineCode",{parentName:"p"},"~/.default-gems file"),". I love this one as I'll never have to run ",Object(i.b)("inlineCode",{parentName:"p"},"gem install pry")," again!"),Object(i.b)("p",null,"What RVM additionally offers that I have not seen in ASDF is the option to create a gemset.\nThis was and still is a useful feature if you're doing Ruby projects involving lots of different\ngems or even testing with specific gems. I rarely felt the need to create a gemset myself.\nThus not having this feature did not have a lot of impact on my workflow (yet).\nI'm not sure if NVM adds any extra functionality, either way I think ASDF will fill the\ngaps because of how it was designed and how it can be extended."),Object(i.b)("p",null,"Finally, I added a ",Object(i.b)("inlineCode",{parentName:"p"},"~/.asdfrc")," file containing: ",Object(i.b)("inlineCode",{parentName:"p"},"legacy_version_file = yes"),".\nThis enables ASDF read all version files we know and love."),Object(i.b)("h2",null,"Conclusion"),Object(i.b)("p",null,"As for my shell time, it's back where it was with only RVM. But nothing messes with my ",Object(i.b)("inlineCode",{parentName:"p"},"cd")," command anymore.\nI also don't have to keep adding these noisy ",Object(i.b)("inlineCode",{parentName:"p"},"source")," lines to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/sidofc/dotfiles"}),"my dotfiles"),"."),Object(i.b)("p",null,"ASDF is still quite new and at the time of writing, there are few integrations.\nThis means that if you use ",Object(i.b)("inlineCode",{parentName:"p"},"capistrano")," to deploy using RVM for example, you won't be able to do that using ASDF just yet.\nBut as mentioned above, someone somewhere will fix that gap or you could give it a shot yourself!"),Object(i.b)("p",null,"I hope you've learned something from this post and also that you will choose to switch to ASDF.\nNot because it's better per-se but because it's universal and extensible and you now no longer have\nto worry about version managers! Install a plugin and you're done! A plugin system and a management system,\nbundled in 3 simple commands with a common interface. ASDF and I will be friends for a long time :)"),Object(i.b)("p",null,"Cheers!"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Many thanks to ",Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"https://medium.com/@vvangemert"}),"@vvgemert")," for proofreading!")),Object(i.b)("p",null,"👋"))}d.isMDXComponent=!0}},[["2loc","5d41","9da1"]]]);