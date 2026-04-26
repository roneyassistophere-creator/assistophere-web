const fs = require('fs');
const content = fs.readFileSync('src/views/Pages/Services/AirbnbVa/AirbnbVaView.tsx', 'utf8');

const oldVisual = `            {/* Visual */}
            <div className="av-fade-5 relative">
              <div className="relative rounded-3xl overflow-hidden aspect-4/3 bg-base-200 border border-base-300 shadow-2xl shadow-black/40 flex items-center justify-center">
                <div className="absolute inset-0 bg-linear-to-br from-primary/12 via-transparent to-secondary/8" />
                <div className="relative z-10 flex flex-col items-center gap-3 text-center p-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/12 border border-primary/25 flex items-center justify-center">
                    <Home className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-base-content/35 text-sm">
                    Image Placeholder — STR Dashboard / Operations Overview
                  </p>
                </div>
                {/* Floating stat cards */}
                <div className="absolute top-4 right-4 bg-base-100/90 backdrop-blur-sm border border-base-300 rounded-xl px-3 py-2 shadow-lg">
                  <p className="text-[10px] text-base-content/40 font-medium">Avg. Response</p>
                  <p className="text-sm font-extrabold text-primary">{'< 15 min'}</p>
                </div>
                <div className="absolute bottom-4 left-4 bg-base-100/90 backdrop-blur-sm border border-base-300 rounded-xl px-3 py-2 shadow-lg">
                  <p className="text-[10px] text-base-content/40 font-medium">Occupancy</p>
                  <p className="text-sm font-extrabold text-success">+18% avg</p>
                </div>
              </div>
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-primary/8 rounded-full blur-[80px] -z-10 scale-75" />
            </div>`;

const newVisual = `            {/* Visual */}
            <div className="av-fade-5 relative w-[85%] sm:w-[75%] lg:w-[90%] max-w-lg mx-auto float-anim perspective-container z-10 mt-12 lg:mt-0 lg:ml-auto">
              <div className="absolute inset-0 bg-linear-to-br from-primary/30 to-secondary/30 rounded-[2.5rem] blur-3xl opacity-0 transition-opacity duration-700 perspective-container-hover:opacity-40 -z-10" />
              
              <div className="perspective-tilt relative rounded-4xl overflow-hidden border border-white/10 dark:border-black/10 shadow-2xl shadow-black/40 bg-zinc-950 dark:bg-white text-zinc-100 dark:text-zinc-900 p-2 backdrop-blur-3xl ring-1 ring-white/5 dark:ring-black/5">
                {/* Header bar */}
                <div className="flex items-center gap-2 px-5 pt-4 pb-3 border-b border-white/10 dark:border-black/10">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(244,63,94,0.4)]" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.4)]" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                  <span className="ml-4 text-[11px] font-mono text-zinc-500 dark:text-zinc-400 tracking-wider">
                    assistophere · dashboard
                  </span>
                </div>
                
                {/* Main Stat Grid */}
                <div className="grid grid-cols-2 gap-3 p-4">
                  {[
                    {
                      title: 'Inbox Handled',
                      val: '100%',
                      sub: 'This week',
                      icon: <MessageSquare className="w-5 h-5 text-blue-400 dark:text-blue-600 transition-transform group-hover/stat:scale-110" />,
                      color: 'text-blue-400 dark:text-blue-600',
                      bg: 'bg-blue-500/10 dark:bg-blue-50',
                    },
                    {
                      title: 'Avg Occupancy',
                      val: '84%',
                      sub: 'Last 30 days',
                      icon: <TrendingUp className="w-5 h-5 text-emerald-400 dark:text-emerald-600 transition-transform group-hover/stat:scale-110" />,
                      color: 'text-emerald-400 dark:text-emerald-600',
                      bg: 'bg-emerald-500/10 dark:bg-emerald-50',
                    },
                    {
                      title: 'Cleaners Synced',
                      val: 'Active',
                      sub: 'All properties',
                      icon: <Sparkles className="w-5 h-5 text-amber-400 dark:text-amber-600 transition-transform group-hover/stat:scale-110" />,
                      color: 'text-amber-400 dark:text-amber-600',
                      bg: 'bg-amber-500/10 dark:bg-amber-50',
                    },
                    {
                      title: 'Direct Bookings',
                      val: '+22%',
                      sub: 'vs last month',
                      icon: <Globe className="w-5 h-5 text-purple-400 dark:text-purple-600 transition-transform group-hover/stat:scale-110" />,
                      color: 'text-purple-400 dark:text-purple-600',
                      bg: 'bg-purple-500/10 dark:bg-purple-50',
                    },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="rounded-3xl p-5 flex flex-col gap-3 bg-white/5 dark:bg-zinc-50 border border-white/5 dark:border-zinc-200/60 shadow-inner group/stat hover:bg-white/10 dark:hover:bg-zinc-100 transition-colors"
                    >
                      <div
                        className={\`w-10 h-10 rounded-2xl \${stat.bg} flex items-center justify-center\`}
                      >
                        {stat.icon}
                      </div>
                      <div className="mt-1">
                         <p className="text-[28px] font-black tracking-tight">{stat.val}</p>
                         <p className="text-[13px] font-bold mt-1 tracking-wide">{stat.title}</p>
                         <p className="text-[11px] text-zinc-400 dark:text-zinc-500">{stat.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Alert strip */}
                <div className="mx-4 mb-4 mt-1 p-4 rounded-2xl bg-rose-500/10 dark:bg-rose-50 border border-rose-500/20 dark:border-rose-100 flex items-center justify-center gap-3 shadow-inner">
                  <Zap className="w-5 h-5 text-rose-500 shrink-0 animate-pulse" />
                  <p className="text-sm text-rose-500 dark:text-rose-600 font-bold tracking-wide">
                    All systems operational · Next check-in in 2h
                  </p>
                </div>
              </div>
              
              {/* Floating Element over Dashboard */}
              <div className="absolute -bottom-4 -left-4 z-20 bg-white dark:bg-zinc-950 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] rounded-xl px-3.5 py-2.5 flex items-center gap-3 border border-zinc-200 dark:border-zinc-800 transition-transform hover:scale-105 duration-300">
                <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center border border-zinc-200 dark:border-zinc-800">
                  <CalendarCheck className="w-4 h-4 text-zinc-900 dark:text-zinc-100" />
                </div>
                <div>
                  <p className="text-[13px] font-black text-zinc-900 dark:text-white leading-tight">3 bookings confirmed</p>
                  <p className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 mt-0.5 uppercase tracking-wide">last 24 hours</p>
                </div>
              </div>
            </div>`;

if (content.includes(oldVisual)) {
    fs.writeFileSync('src/views/Pages/Services/AirbnbVa/AirbnbVaView.tsx', content.replace(oldVisual, newVisual));
    console.log("Success");
} else {
    // try to match using index of
    const start = content.indexOf('{/* Visual */}');
    if (start === -1) {
        console.log("Cannot find start");
    } else {
        const endStr = '              {/* Glow behind image */}\n              <div className="absolute inset-0 bg-primary/8 rounded-full blur-[80px] -z-10 scale-75" />\n            </div>';
        const end = content.indexOf(endStr);
        if (end === -1) {
            console.log("Cannot find end");
        } else {
            const oldFull = content.substring(start - 12, end + endStr.length);
            fs.writeFileSync('src/views/Pages/Services/AirbnbVa/AirbnbVaView.tsx', content.replace(oldFull, newVisual));
            console.log("Success with substring match");
        }
    }
}
