require 'slim'

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page '/path/to/file.html', layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy '/this-page-has-no-template.html', '/template-file.html', locals: {
#  which_fake_page: 'Rendering a fake page with a local variable' }

###
# Helpers
###

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload, ignore: [
    /js-source\//
  ]
end

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     'Helping'
#   end
# end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript
end

activate :deploy do |deploy|
  deploy.deploy_method = :rsync
  deploy.host   = 'host'
  deploy.path   = '/var/www/xxx'
  deploy.build_before = true # default: false
  # Optional Settings
  # deploy.user  = 'user' # no default
  deploy.port  = 22 # ssh port, default: 22
  deploy.clean = true # remove orphaned files on remote host, default: false
  # deploy.flags = '-rltgoDvzO --no-p --del' # add custom flags, default: -avz
end

activate :external_pipeline,
  name: :browserify,
  command: build? ? "npm run build":"npm run watch",
  source: "./.tmp/"
