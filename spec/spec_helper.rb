# Require all of the necessary gems
require 'rspec'
require 'capybara/rspec'
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

  Capybara.server = :webrick

  # Configure Capybara to use Selenium.
  Capybara.register_driver :selenium do |app|
    # Configure selenium to use Firefox.
    Capybara::Selenium::Driver.new(app, browser: :firefox)
  end

  Capybara.app = Rack::Jekyll.new(force_build: true)
end
