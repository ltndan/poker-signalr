using System.Collections.Generic;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using PokerService.Hubs;
using PokerService.Models;

namespace PokerService
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMemoryCache();

            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials());
            });

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            
            services.AddSignalR(options =>
            {
                options.EnableDetailedErrors = true;
            });
            services.AddCors(options => options.AddDefaultPolicy(builder =>
                builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin().AllowCredentials()));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors();
            app.UseSignalR(routes => { routes.MapHub<PokerHub>("/pokerhub"); });

            app.UseMvc();
            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "wwwroot";
            });
        }
    }
}
