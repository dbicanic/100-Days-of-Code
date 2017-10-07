require_relative '../algos'

describe 'reverseString' do
  it 'returns a string reversed' do
    str = "This is a test string"

    revStr = reverseString( str )
    expect(revStr).to match("gnirts tset a si sihT")
  end
end

describe 'reverseStringManual' do
  it 'returns a string reversed' do
    str = "This is a test string"

    revStr = reverseStringManual( str )
    expect(revStr).to match("gnirts tset a si sihT")
  end
end

describe 'translatePigLatin' do
  it 'Translate the provided string to pig latin' do
    str = "california"

    revStr = translatePigLatin( str )
    expect(revStr).to match("aliforniacay")
  end
end

describe 'translatePigLatin' do
  it 'Translate the provided string to pig latin' do
    str = "paragraphs"

    revStr = translatePigLatin( str )
    expect(revStr).to match("aragraphspay")
  end
end

describe 'translatePigLatin' do
  it 'Translate the provided string to pig latin' do
    str = "glove"

    revStr = translatePigLatin( str )
    expect(revStr).to match("oveglay")
  end
end

describe 'translatePigLatin' do
  it 'Translate the provided string to pig latin' do
    str = "algorithm"

    revStr = translatePigLatin( str )
    expect(revStr).to match("algorithmway")
  end
end

describe 'translatePigLatin' do
  it 'Translate the provided string to pig latin' do
    str = "eight"

    revStr = translatePigLatin( str )
    expect(revStr).to match("eightway")
  end
end