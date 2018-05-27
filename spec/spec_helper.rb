require 'rspec'
require 'capybara/rspec'
require 'selenium-webdriver'
require 'rack/jekyll'
require 'rack/test'
require 'byebug'

RSpec.configure do |config|
  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end

  config.shared_context_metadata_behavior = :apply_to_host_groups

  #optional rspec stuff
  config.filter_run_when_matching :focus
  config.default_formatter = 'doc' if config.files_to_run.one?
  # /optional rspec stuff

  # capybara et al
  Capybara.register_driver :firefox_headless do |app|
    options = ::Selenium::WebDriver::Firefox::Options.new
    options.args << '--headless'

    Capybara::Selenium::Driver.new(app, browser: :firefox, options: options)
  end

  Capybara.javascript_driver = :firefox_headless
  Capybara.app = Rack::Jekyll.new(force_build: true)
  Capybara.server = :webrick
end
