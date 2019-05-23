# 字符串计算器

> 写一个含有Add 方法的 StringCalculator 类，通过分割符分割给定的字符串，返回字符串中所有数字的总和

## Todo

* 创建 StringCalculator 类
* 创建 add 方法
* '' => 0
* '1' => 1 '2' => 2
* 两个数字，逗号分割 '1,2' => 3 '10,20' => 30
* 两个数字，换行符分割 '1\n2' => 3
* 以任意方式分割字符串 '1\n2,3\n4' => 10
* 不允许使用负数 '-1,2,-3' => 'negatives not allowed: -1,-3'

## branch feature/pratice2


### 寻找字符串中指定字串出现的次数和位置

> 找出字符串 "abcabcabcabcabcabda" 中 "ab" 出现的次数和位置。

#### Todo

* 创建 FindSubString 类
* 创建 search 方法
* '' => 0 ,[]
* 'a' => 0 ,[]
* 'ab' => 1 ,[0]
* 'aba' => 1 ,[0]
* 'abab' => 2 ,[0,2]
* 'ababababab' => 4 ,[0 2,4,6,8]
* 'aaabaa' => 1 , [2]
* 'aaabeeebbaddabddab' => 3 , [2,12,16]
* 'hcvhxnm' => 0,[]