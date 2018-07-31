require('../../util').createTestCase(__filename, (window, logs, done) => {
  const { document } = window
  expect(document.querySelectorAll('li').length).toBe(2)

  expect(document.querySelector('li:nth-child(1)').textContent)
    .toMatch('text should have a min length of 5')

  expect(document.querySelector('li:nth-child(2)').textContent)
    .toMatch('email must be a valid email')

  const text = document.getElementById('text')
  text.value = 'foobar'
  text.dispatchEvent(new window.CustomEvent('input'))

  const email = document.getElementById('email')
  email.value = 'hello@foobar.com'
  email.dispatchEvent(new window.CustomEvent('input'))

  setTimeout(() => {
    expect(document.querySelectorAll('li').length).toBe(0)
    done()
  }, 0)
})
