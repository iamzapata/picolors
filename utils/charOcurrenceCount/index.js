const charOcurrenceCount = (str, ch) => (str.match(new RegExp(ch, 'g')) || []).length

export default charOcurrenceCount
