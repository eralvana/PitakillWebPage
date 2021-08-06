function App() {
  return (
    <>


    <html lang="en">

    <body>
    <div>Leopoldo Caballero</div>
    <div>programming,bike,books, stuff basically</div>
    <section>
    <div>
    <h1>What I'm Thinking</h1>
    </div>
    <div>
    <h3> Moving this site to gh-pages with SSL for free <br/><small>14 June 2017</small></h3>
    </div>
    <div>
    <p>This site was hosted in a VPS with 128 MB of RAM, and 10GB of disk space. So far, so good. These specs are sufficient enough for run a <a href="https://gohugo.io/">hugo</a> server, a <a href="https://nginx.org/en/">nginx</a> reverse proxy. And with <a href="https://letsencrypt.org/">Let&rsquo;s Encrypt</a> all is served with SSL.</p>
    <p>Everything is smooth with this configuration, but in a near future (next month) the plan with the VPS is over, and there is not possible to extend the contract because the provider was acquired by a third and the product was outdated.</p>
    <p>I really want to keep the site online and I don&rsquo;t want to pay $5 USD monthly for a VPS in some provider like Digital Ocean, Rackspace or similar, a full year in the last VPS was $12 USD, that was my first motivation to contract the VPS in the first place.</p>
    <p>Well, know with <a href="https://pages.github.com/">github pages</a> with a custom domain, and with the awesomeness of <a href="https://www.cloudflare.com/">Cloudflare</a> you can place a project like this one. With all the goodness like custom domain and SSL.</p>
    <p>Basically you need:</p>
    <ul>
    <li>A github account (Free)</li>
    <li>A cloudflare account (Free)</li>
    <li>A domain (Not free)</li>
    <li>Some knowledge with DNS or just <a href="https://www.google.com.mx/search?q=github+pages+custom+domain+cloudflare+SSL&amp;oq=github+pages+custom+domain+cloudflare+SSL&amp;aqs=chrome..69i57j69i64.10971j0j1&amp;sourceid=chrome&amp;ie=UTF-8">Google</a></li>
    </ul>
    <a href="">cloudflare</a>
    <a href="">gh-pages</a>
    <a href="">github</a>
    <a href="">free</a>
    <a href="">ssl</a>
    <a href="">custom-domain</a>
    </div>


    <div>
    <h3> Windows 10 almost ready <br/><small>16 February 2017</small></h3>
    </div>
    <div>
    <p>My home setup for development is a built machine with this specs:</p>
    <ul>
    <li><a href="https://www.gigabyte.com/Motherboard/GA-Z97N-WIFI-rev-10#ov">GA-Z97N-WIFI</a></li>
    <li><a href="https://ark.intel.com/products/75038/Intel-Core-i5-4440-Processor-6M-Cache-up-to-3_30-GHz">Intel i5</a></li>
    <li><a href="http://www.kingston.com/dataSheets/KVR1333D3N9_8G.pdf">Kingston 8GB RAM 1333MHz</a> x2</li>
    <li><a href="https://www.kingston.com/en/ssd/consumer/suv400s3">Kingston uv400</a></li>
    <li><a href="https://www.samsung.com/us/computing/monitors/uhd/samsung-uhd-28-monitor-with-high-glossy-black-finish-lu28e590ds-za/">28&rdquo; 4k Samsung Monitor</a> main (x2 2k displays PIP mode)</li>
    <li><a href="http://www.benq.dk/product/monitor/bl2400pt">24&rdquo; FullHD BenQ Monitor</a> second (set vertically)</li>
    </ul>
    <p>When I assembled it <a href="https://www.sabayon.org/">Sabayon Linux</a> was my GNU/Linux flavor choice because I really like the <a href="https://www.gentoo.org/">Gentoo Linux</a> liberty. After some research I gave it a try to <a href="https://www.archlinux.org/">Arch Linux</a>, and my experience has been a pleasure with it.</p>
    <p>My software setup is:</p>
    <ul>
    <li><a href="https://i3wm.org/">i3 improved tiling wm</a></li>
    <li><a href="https://www.vim.org/">vim</a> with a GTK for GUI</li>
    <li><a href="https://www.google.com/chrome/">Google Chrome</a> develop and daily use</li>
    <li><a href="https://www.mozilla.org/en-US/firefox/products/">Firefox</a> develop</li>
    <li><a href="https://github.com/lxde/qterminal">qterminal</a> for use <a href="https://github.com/tonsky/FiraCode">FiraCode</a> font</li>
    <li><a href="https://go.googlesource.com/image">go fonts</a> for my UI</li>
    </ul>
    <p>So far so good with this setup. Almost all working 100% (suspend to RAM, hibernate, audio through HDMI, WIFI, Ethernet, Bluetooth), except:</p>
    <ul>
    <li>Only one source of sound can be hear at a time, <em>i.e.</em> <a href="https://play.google.com/music/listen?authuser">Google Music</a> via <a href="https://www.googleplaymusicdesktopplayer.com/">Google Play Music Desktop Player</a> is playing and I can&rsquo;t play a video on Youtube via Google Chrome. This is annoying but bearable.</li>
    <li>Audio in/out via Bluetooth, I can connect my devices with the machine via Bluetooth but I have not been able to get audio in/out of my hands free.</li>
    </ul>
    <p>When I read about <a href="https://msdn.microsoft.com/en-us/commandline/wsl/install_guide">WSL</a> some months ago, I thought, Windows is opening to the Open Source community I&rsquo;m going to try this.</p>
    <p>The last weekend was time to try Windows 10 and Ubuntu in it via WSL, so here we go with my experience:</p>
    <ul>
    <li>Installation: 100% easy, you know it&rsquo;s Windows, click this, click that, wait, reboot.</li>
    <li>Run bash on Windows: 100% easy, Windows + R, write &lsquo;bash&rsquo; enter, then a command prompt with basic setup (username, password)</li>
    <li>At this point, Windows 10 is a nice UI, but the UX for me is better with Mac OS X and the best with GNU/Linux (fully customizable)</li>
    </ul>
    <p>That command prompt is Linux, it&rsquo;s supports, you know, Linux commands (Doh!), so a <code>$ sudo apt-get update</code> is a must and then install all the nice stuff (vim, zsh, git, golang, nodejs, etc.)
    My daily development involves nodejs for run local http servers with a flow of automatic reload when files change and stuff like that. So here comes the first big problem. WSL actually does not supports <a href="https://github.com/Microsoft/BashOnWindows/issues/69">NETLINKS</a> <em>i.e.</em> in my daily use, I can&rsquo;t start a nodejs server inside bash, because for that Ubuntu on Windows, there is not a network interface.
    My next step was start a command prompt from <a href="https://msdn.microsoft.com/en-us/powershell/mt173057.aspx">PowerShell</a> install there Git, NodeJs, and give it a try.
    The editor, as you know for this post, I like is vim, there is a port for Windows, but I prefer install a <a href="https://www.x.org/wiki/">X Server</a> with some app for Windows like <a href="https://sourceforge.net/projects/xming/">Xming</a> and start there vim with GTK GUI, this worked. So, now with my project working in Windows with NodeJs and everything working as expected, let&rsquo;s go, develop time :)
    After some time developing, let&rsquo;s save this work in progress, but you know, I start a Linux program (gvim) and modify files with it, so the Carriage Returns (CR) in Unix is in a way that Windows sees like (^M), and Git in Windows detect that, so All my files where screwed up with changes that I didn&rsquo;t wanted.</p>
    <p>So, my develop time is worthy, Windows maybe I&rsquo;m going to try you again, when the Beta status of the WSL is in a better work flow for me. But now Arch Linux for my home developments is the best.</p>
    <a href="">windows</a>
    <a href="">linux</a>
    <a href="">develop</a>
    </div>


    <div>
    <h3> Why this site? <br/><small>10 January 2017</small></h3>
    </div>
    <div>
    <p>This <a href="https://pitakill.net">domain</a> is almost in its thirteen anniversary, in the first steps was a blog about my GNU/Linux stuff, and a catalog of some weird recording of the cuban songwriter Silvio Rodríguez. The engine behind was JAWS, made by some folks in México.</p>
    <p>Why revive it? Because:</p>
    <ul>
    <li>I can</li>
    <li>A space to write some stuff about my new skills in some programming languages</li>
    <li>A place where I can share my though about my readings</li>
    <li>And all the things that can go in a blog :-P</li>
    </ul>
    <p>So, in my next post i&rsquo;m going to explain some basic infrastructure of the site.</p>
    <p>Later folks.</p>
    <a href="">general</a>
    </div>

    </section>
    </body>
    </html>


    </>
  );
}

export default App;
