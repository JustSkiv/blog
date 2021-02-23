---
title: One post
date: 2021-02-23
category: test
excludeRelatedPost: true
cover: /images/euler.jpg
tags:
    - first post
    - testing
---
## asd
213
### asddas
asa

```go
func Height(root *TNode) int {
	if root == nil {
		return 0
	}

	return 1 + max(Height(root.left), Height(root.right))
}
```

> some description...

bla bla

<!-- more -->

## Что такое конвейр?

Конвейер (англ. pipeline) в терминологии операционных систем семейства Unix — некоторое множество
процессов, для которых выполнено следующее перенаправление ввода-вывода: то, что выводит на поток
стандартного вывода предыдущий процесс, попадает в поток стандартного ввода следующего процесса.
Запуск конвейера реализован с помощью системного вызова pipe().

## But what exactly is Pipeline??

In Unix-like computer operating systems, a pipeline is a mechanism for inter-process communication
using message passing. A pipeline is a set of processes chained together by their standard streams,
so that the output text of each process (stdout) is passed directly as input (stdin) to the next
one. The second process is started as the first process is still executing, and they are executed
concurrently. The concept of pipelines was championed by Douglas McIlroy at Unix's ancestral home of
Bell Labs, during the development of Unix, shaping its toolbox philosophy.[1][2] It is named by
analogy to a physical pipeline. A key feature of these pipelines is their "hiding of internals" (
Ritchie & Thompson, 1974). This in turn allows for more clarity and simplicity in the system.

## Симметричны ли деревья?

Посмотрите-ка на мою реализацию проверки симметричности деревьев!

```go
func IsSymmetric(root *TNode) bool {
	return isSymmetricIterative(root)
}

func isSymmetricIterative(root *TNode) bool {
	q := Queue{}

	q.Add(root)
	q.Add(root)

	for {
		if q.Len() == 0 {
			break
		}

		l := q.Poll()
		r := q.Poll()

		if r == nil && l == nil {
			continue
		}

		if r == nil || l == nil {
			return false
		}

		if l.value != r.value {
			return false
		}

		q.Add(l.left)
		q.Add(r.right)
		q.Add(l.right)
		q.Add(r.left)
	}

	return true
}

func isSymmetricRecursive(root *TNode) bool {
	return isMirror(root, root)
}

func isMirror(left *TNode, right *TNode) bool {
	if left == nil && right == nil {
		return true
	}

	if left == nil || right == nil {
		return false
	}

	return left.value == right.value &&
		isMirror(left.left, right.right) &&
		isMirror(left.right, right.left)
}
```


``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    reward: {
      text: 'Buy me a cup of coffee ☕.',
      // 是否启用
      enable: true,
      ways: [
        {
          name: 'wechat',
          icon: 'wechat',
          qrcode: '/images/wechat.png',
          text: 'This is a Wechat Pay qrcode',
          color: 'rgb(9, 187, 7)'
        },
        {
          name: 'alipay',
          symbol: 'alipay',
          qrcode: '/images/alipay.png',
          text: 'This is a Alipay Pay qrcode',
          color: '#1296db'
        }
      ]
    },
  }
}
```


zzzsd