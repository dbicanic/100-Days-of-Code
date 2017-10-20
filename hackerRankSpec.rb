require_relative '../hackerRank'

describe 'birthdayCandles' do
  it 'returns 3' do
    num = 3

    ans = birthdayCandles([7,7,8,7,3,8,8])
    expect(ans).to match(num)
  end
end