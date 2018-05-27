require 'spec_helper'

describe 'home page', type: :feature, js: true do
  before { visit '/' }

  it 'has the welcome message' do
    expect(page).to have_text('Welcome')
  end
end
