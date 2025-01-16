source "https://rubygems.org"

# Use the same version of Jekyll as GitHub Pages
gem "github-pages", group: :jekyll_plugins

# Essential plugins
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
  gem "jekyll-paginate"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Lock `http_parser.rb` gem to `v0.6.0` for JRuby - see https://github.com/jekyll/jekyll/issues/8523
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# Required for Ruby >= 3.0
gem "webrick"
