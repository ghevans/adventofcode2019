let rules = `56: 39 28 | 110 10
85: 34 110 | 111 39
4: 39 74 | 110 44
125: 96 39 | 112 110
79: 39 117 | 110 24
91: 52 39 | 65 110
60: 39 83 | 110 58
101: 109 39 | 28 110
98: 130 39 | 88 110
8: 42
11: 42 31
27: 110 1 | 39 86
104: 28 110 | 44 39
120: 44 39 | 66 110
34: 110 35 | 39 46
116: 39 80 | 110 90
87: 74 39 | 64 110
76: 98 110 | 41 39
108: 115 110 | 44 39
59: 110 44
103: 110 36 | 39 33
66: 39 110 | 110 82
62: 39 102 | 110 116
30: 39 24 | 110 80
123: 110 44 | 39 109
93: 39 53 | 110 77
80: 39 39
83: 27 110 | 119 39
115: 39 110
22: 91 39 | 50 110
17: 110 127 | 39 15
110: "b"
69: 82 110 | 39 39
105: 39 63 | 110 107
21: 84 110 | 120 39
75: 110 39 | 39 110
128: 110 115 | 39 89
50: 39 108 | 110 99
70: 80 110
48: 39 95 | 110 61
25: 110 95 | 39 123
67: 39 114 | 110 101
114: 10 110 | 69 39
37: 74 110
89: 110 110 | 110 39
32: 26 39 | 62 110
130: 110 44 | 39 80
15: 39 3 | 110 93
20: 110 72 | 39 87
61: 39 80 | 110 117
58: 23 110 | 48 39
13: 66 110 | 117 39
44: 110 110
112: 39 32 | 110 85
99: 115 39 | 90 110
71: 110 123 | 39 113
46: 110 64 | 39 66
129: 110 24 | 39 89
84: 82 90
36: 39 71 | 110 81
78: 110 90 | 39 28
0: 8 11
100: 110 69 | 39 117
49: 90 110 | 69 39
9: 24 110 | 89 39
73: 110 29 | 39 106
35: 64 39 | 109 110
118: 76 110 | 47 39
12: 74 39
53: 69 39 | 28 110
77: 110 90 | 39 44
127: 39 14 | 110 43
111: 65 39 | 56 110
3: 39 5 | 110 100
109: 82 82
43: 55 110 | 126 39
7: 101 39 | 13 110
10: 39 39 | 110 82
121: 66 110 | 89 39
102: 44 39 | 74 110
81: 84 110 | 97 39
2: 124 110 | 88 39
82: 39 | 110
29: 79 39 | 52 110
54: 39 84 | 110 122
64: 82 39 | 39 110
65: 24 110 | 69 39
52: 110 69 | 39 115
74: 110 39
92: 39 19 | 110 57
51: 110 30 | 39 78
28: 110 110 | 39 39
126: 39 66 | 110 90
45: 17 39 | 92 110
90: 110 39 | 39 39
33: 18 39 | 54 110
16: 110 28 | 39 44
72: 39 115 | 110 117
106: 39 77 | 110 49
119: 39 97 | 110 16
113: 75 110 | 44 39
18: 129 39 | 37 110
41: 99 110 | 72 39
68: 110 118 | 39 60
6: 12 39 | 128 110
57: 39 21 | 110 2
5: 109 110 | 117 39
47: 51 39 | 7 110
124: 69 39 | 66 110
94: 39 103 | 110 105
39: "a"
1: 39 64 | 110 44
117: 39 110 | 39 39
42: 45 39 | 125 110
19: 25 110 | 6 39
26: 78 110 | 77 39
96: 39 73 | 110 22
38: 39 114 | 110 70
63: 110 40 | 39 67
95: 110 109 | 39 115
55: 66 82
14: 104 39 | 59 110
40: 39 101 | 110 4
31: 68 110 | 94 39
24: 39 110 | 110 110
86: 39 69 | 110 109
122: 90 39 | 64 110
97: 117 39 | 10 110
23: 39 121 | 110 9
107: 39 38 | 110 20
88: 39 44`.split('\n');

let parsed = `56: (a(bb|aa)|b(aa|b(a|b)))
85: ((b(((a|b)a|ab)a|(a|b)(a|b)b)|a(b((a|b)a|ab)|a(ab|b(a|b))))b|(((ab|bb)b|((a|b)b|aa)a)a|(a(bb|aa)|b(aa|b(a|b)))b)a)
4: (aba|bbb)
125: ((a(b((a(ab|aa)|b(ab|bb))a|(b((a|b)b|aa)|aab)b)|a(a(b(ba|aa)|abb)|b((ba|aa)b|((a|b)b|aa)a)))|b(((b((a|b)b|aa)|aab)a|((ab|bb)b|((a|b)b|aa)a)b)a|(a(abb|bba)|b(aba|(ba|aa)b))b))a|(a(((b(ba|aa)|a(bb|aa))b|(b(ba|aa)|abb)a)a|(a(bba|bab)|b(aaa|b(ba|aa)))b)|b((b(((a|b)a|ab)a|(a|b)(a|b)b)|a(b((a|b)a|ab)|a(ab|b(a|b))))b|(((ab|bb)b|((a|b)b|aa)a)a|(a(bb|aa)|b(aa|b(a|b)))b)a))b)
79: (a(ab|aa)|b(ab|bb))
91: ((b((a|b)b|aa)|aab)a|((ab|bb)b|((a|b)b|aa)a)b)
60: (a((b(a((a|b)a|ab)|bbb)|a(a((a|b)b|aa)|b(a|b)(a|b)))b|(a((ab|aa)a|(aa|b(a|b))b)|b(b(bb|aa)|abb))a)|b((a((ab|b(a|b))b|(bb|ba)a)|b((ab|bb)b|(bb|ba)a))b|(a(b(a|b)(a|b)|aab)|b(aaa|b(ab|aa)))a))
101: ((a|b)(a|b)a|(bb|aa)b)
98: ((bbb|aaa)a|abbb)
8: (((b(a(((bb|aa)b|bba)a|bbbb)|b((ab|b(a|b))(a|b)b|(a(ab|b(a|b))|b(ba|aa))a))|a(a(a((a|b)(a|b)b|(ab|aa)a)|b(b((a|b)b|aa)|a(ab|aa)))|b(a(((a|b)b|aa)a|(bb|aa)b)|b(b(ba|aa)|abb))))a|(a((b(b(a|b)(a|b)|aab)|a(bbb|a(a|b)(a|b)))b|(baaa|(bab|a(bb|ba))b)a)|b(a((a|b)(ba|aa)b|(bba|(ab|b(a|b))b)a)|b((((a|b)b|aa)a|(ab|b(a|b))b)b|abba)))b)a|((a(b((a(ab|aa)|b(ab|bb))a|(b((a|b)b|aa)|aab)b)|a(a(b(ba|aa)|abb)|b((ba|aa)b|((a|b)b|aa)a)))|b(((b((a|b)b|aa)|aab)a|((ab|bb)b|((a|b)b|aa)a)b)a|(a(abb|bba)|b(aba|(ba|aa)b))b))a|(a(((b(ba|aa)|a(bb|aa))b|(b(ba|aa)|abb)a)a|(a(bba|bab)|b(aaa|b(ba|aa)))b)|b((b(((a|b)a|ab)a|(a|b)(a|b)b)|a(b((a|b)a|ab)|a(ab|b(a|b))))b|(((ab|bb)b|((a|b)b|aa)a)a|(a(bb|aa)|b(aa|b(a|b)))b)a))b)b)
11: ((((b(a(((bb|aa)b|bba)a|bbbb)|b((ab|b(a|b))(a|b)b|(a(ab|b(a|b))|b(ba|aa))a))|a(a(a((a|b)(a|b)b|(ab|aa)a)|b(b((a|b)b|aa)|a(ab|aa)))|b(a(((a|b)b|aa)a|(bb|aa)b)|b(b(ba|aa)|abb))))a|(a((b(b(a|b)(a|b)|aab)|a(bbb|a(a|b)(a|b)))b|(baaa|(bab|a(bb|ba))b)a)|b(a((a|b)(ba|aa)b|(bba|(ab|b(a|b))b)a)|b((((a|b)b|aa)a|(ab|b(a|b))b)b|abba)))b)a|((a(b((a(ab|aa)|b(ab|bb))a|(b((a|b)b|aa)|aab)b)|a(a(b(ba|aa)|abb)|b((ba|aa)b|((a|b)b|aa)a)))|b(((b((a|b)b|aa)|aab)a|((ab|bb)b|((a|b)b|aa)a)b)a|(a(abb|bba)|b(aba|(ba|aa)b))b))a|(a(((b(ba|aa)|a(bb|aa))b|(b(ba|aa)|abb)a)a|(a(bba|bab)|b(aaa|b(ba|aa)))b)|b((b(((a|b)a|ab)a|(a|b)(a|b)b)|a(b((a|b)a|ab)|a(ab|b(a|b))))b|(((ab|bb)b|((a|b)b|aa)a)a|(a(bb|aa)|b(aa|b(a|b)))b)a))b)b)((b((((bbb|aaa)a|abbb)b|((aba|(ba|aa)b)b|(aab|b(ab|aa))a)a)b|((b(a(ab|bb)|baa)|a(b(ba|aa)|a(bb|aa)))a|(((a|b)(a|b)a|(bb|aa)b)a|((ab|b(a|b))b|(ab|aa)a)b)b)a)|a(a((b(a((a|b)a|ab)|bbb)|a(a((a|b)b|aa)|b(a|b)(a|b)))b|(a((ab|aa)a|(aa|b(a|b))b)|b(b(bb|aa)|abb))a)|b((a((ab|b(a|b))b|(bb|ba)a)|b((ab|bb)b|(bb|ba)a))b|(a(b(a|b)(a|b)|aab)|b(aaa|b(ab|aa)))a)))b|(a(b(a(b(bbb|a(a|b)(a|b))|a((ba|ab)b|bba))|b((a|b)(ba|aa)b|((ab|aa)a|(aa|b(a|b))b)a))|a(((b(ab|bb)|a(bb|ba))a|babb)a|(a(a|b)(ba|aa)|b((ba|aa)a|((a|b)a|ab)b))b))|b(a(b(a((a|b)(a|b)a|(bb|aa)b)|b(aba|bbb))|a(a((aa|b(a|b))b|((a|b)b|aa)a)|b((a|b)(a|b)a|(bb|aa)b)))|b(a(a((aa|b(a|b))b|((a|b)b|aa)a)|baab)|b(b(aab|b(ab|aa))|a(baa|((a|b)a|ab)b)))))a))
27: (b(a((a|b)a|ab)|bbb)|a(a((a|b)b|aa)|b(a|b)(a|b)))
104: ((bb|aa)b|bba)
120: (bba|(ab|b(a|b))b)
34: (b(((a|b)a|ab)a|(a|b)(a|b)b)|a(b((a|b)a|ab)|a(ab|b(a|b))))
116: (aaa|b(ba|aa))
87: (baa|((a|b)a|ab)b)
76: (((bbb|aaa)a|abbb)b|((aba|(ba|aa)b)b|(aab|b(ab|aa))a)a)
108: (abb|bba)
59: (bbb)
103: (b(a(b(bbb|a(a|b)(a|b))|a((ba|ab)b|bba))|b(((a|b)(ba|aa))b|((ab|aa)a|(aa|b(a|b))b)a))|a(((b(ab|bb)|a(bb|ba))a|babb)a|(a((a|b)(ba|aa))|b((ba|aa)a|((a|b)a|ab)b))b))
66: (ab|b(a|b))
62: (a(bba|bab)|b(aaa|b(ba|aa)))
30: (a(ab|bb)|baa)
123: (bbb|a(a|b)(a|b))
93: (a(((a|b)b|aa)a|(bb|aa)b)|b(b(ba|aa)|abb))
80: aa
83: ((b(a((a|b)a|ab)|bbb)|a(a((a|b)b|aa)|b(a|b)(a|b)))b|(a((ab|aa)a|(aa|b(a|b))b)|b(b(bb|aa)|abb))a)
115: ab
22: (((b((a|b)b|aa)|aab)a|((ab|bb)b|((a|b)b|aa)a)b)a|(a(abb|bba)|b(aba|(ba|aa)b))b)
17: (b(a(((bb|aa)b|bba)a|bbbb)|b(((ab|b(a|b))(a|b))b|(a(ab|b(a|b))|b(ba|aa))a))|a(a(a((a|b)(a|b)b|(ab|aa)a)|b(b((a|b)b|aa)|a(ab|aa)))|b(a(((a|b)b|aa)a|(bb|aa)b)|b(b(ba|aa)|abb))))
110: b
69: ((a|b)b|aa)
105: (a(b(a((a|b)(a|b)a|(bb|aa)b)|b(aba|bbb))|a(a((aa|b(a|b))b|((a|b)b|aa)a)|b((a|b)(a|b)a|(bb|aa)b)))|b(a(a((aa|b(a|b))b|((a|b)b|aa)a)|baab)|b(b(aab|b(ab|aa))|a(baa|((a|b)a|ab)b))))
21: (((a|b)(ba|aa))b|(bba|(ab|b(a|b))b)a)
75: (ba|ab)
128: (bab|a(bb|ba))
50: (a(abb|bba)|b(aba|(ba|aa)b))
70: aab
48: (a(b(a|b)(a|b)|aab)|b(aaa|b(ab|aa)))
25: (b(b(a|b)(a|b)|aab)|a(bbb|a(a|b)(a|b)))
67: (a((aa|b(a|b))b|((a|b)b|aa)a)|b((a|b)(a|b)a|(bb|aa)b))
114:((aa|b(a|b))b|((a|b)b|aa)a)
37: bab
89: (bb|ba)
32: (((b(ba|aa)|a(bb|aa))b|(b(ba|aa)|abb)a)a|(a(bba|bab)|b(aaa|b(ba|aa)))b)
130: (bbb|aaa)
15: (a(a((a|b)(a|b)b|(ab|aa)a)|b(b((a|b)b|aa)|a(ab|aa)))|b(a(((a|b)b|aa)a|(bb|aa)b)|b(b(ba|aa)|abb)))
20: (b(aab|b(ab|aa))|a(baa|((a|b)a|ab)b))
61: (aaa|b(ab|aa))
58: ((a((ab|b(a|b))b|(bb|ba)a)|b((ab|bb)b|(bb|ba)a))b|(a(b(a|b)(a|b)|aab)|b(aaa|b(ab|aa)))a)
13: ((ab|b(a|b))b|(ab|aa)a)
44: bb
112: (a(((b(ba|aa)|a(bb|aa))b|(b(ba|aa)|abb)a)a|(a(bba|bab)|b(aaa|b(ba|aa)))b)|b((b(((a|b)a|ab)a|(a|b)(a|b)b)|a(b((a|b)a|ab)|a(ab|b(a|b))))b|(((ab|bb)b|((a|b)b|aa)a)a|(a(bb|aa)|b(aa|b(a|b)))b)a))
99: (aba|(ba|aa)b)
71: (b(bbb|a(a|b)(a|b))|a((ba|ab)b|bba))
46: (b((a|b)a|ab)|a(ab|b(a|b)))
129: (b(ab|bb)|a(bb|ba))
84: ((a|b)(ba|aa))
36: (a(b(bbb|a(a|b)(a|b))|a((ba|ab)b|bba))|b(((a|b)(ba|aa))b|((ab|aa)a|(aa|b(a|b))b)a))
78: (b(ba|aa)|a(bb|aa))
0: 8 11
100: (b((a|b)b|aa)|a(ab|aa))
49: ((ba|aa)b|((a|b)b|aa)a)
9: ((ab|bb)b|(bb|ba)a)
73: (b((a(ab|aa)|b(ab|bb))a|(b((a|b)b|aa)|aab)b)|a(a(b(ba|aa)|abb)|b((ba|aa)b|((a|b)b|aa)a)))
35: (((a|b)a|ab)a|(a|b)(a|b)b)
118: ((((bbb|aaa)a|abbb)b|((aba|(ba|aa)b)b|(aab|b(ab|aa))a)a)b|((b(a(ab|bb)|baa)|a(b(ba|aa)|a(bb|aa)))a|(((a|b)(a|b)a|(bb|aa)b)a|((ab|b(a|b))b|(ab|aa)a)b)b)a)
12: baa
53: (((a|b)b|aa)a|(bb|aa)b)
77: (b(ba|aa)|abb)
127: (a(((bb|aa)b|bba)a|bbbb)|b(((ab|b(a|b))(a|b))b|(a(ab|b(a|b))|b(ba|aa))a))
111: (((ab|bb)b|((a|b)b|aa)a)a|(a(bb|aa)|b(aa|b(a|b)))b)
3: (a((a|b)(a|b)b|(ab|aa)a)|b(b((a|b)b|aa)|a(ab|aa)))
109: (a|b)(a|b)
43: (((ab|b(a|b))(a|b))b|(a(ab|b(a|b))|b(ba|aa))a)
7: (((a|b)(a|b)a|(bb|aa)b)a|((ab|b(a|b))b|(ab|aa)a)b)
10: (aa|b(a|b))
121: ((ab|b(a|b))b|(bb|ba)a)
102: (bba|bab)
81: (((a|b)(ba|aa))b|((ab|aa)a|(aa|b(a|b))b)a)
2: ((((a|b)b|aa)a|(ab|b(a|b))b)b|abba)
82: (a|b)
29: ((a(ab|aa)|b(ab|bb))a|(b((a|b)b|aa)|aab)b)
54: (a((a|b)(ba|aa))|b((ba|aa)a|((a|b)a|ab)b))
64: ((a|b)a|ab)
65: ((ab|bb)b|((a|b)b|aa)a)
52: (b((a|b)b|aa)|aab)
74: ba
92: (a((b(b(a|b)(a|b)|aab)|a(bbb|a(a|b)(a|b)))b|(baaa|(bab|a(bb|ba))b)a)|b(a(((a|b)(ba|aa))b|(bba|(ab|b(a|b))b)a)|b((((a|b)b|aa)a|(ab|b(a|b))b)b|abba)))
51: (b(a(ab|bb)|baa)|a(b(ba|aa)|a(bb|aa)))
28: bb|aa
126: (a(ab|b(a|b))|b(ba|aa))
45: ((b(a(((bb|aa)b|bba)a|bbbb)|b(((ab|b(a|b))(a|b))b|(a(ab|b(a|b))|b(ba|aa))a))|a(a(a((a|b)(a|b)b|(ab|aa)a)|b(b((a|b)b|aa)|a(ab|aa)))|b(a(((a|b)b|aa)a|(bb|aa)b)|b(b(ba|aa)|abb))))a|(a((b(b(a|b)(a|b)|aab)|a(bbb|a(a|b)(a|b)))b|(baaa|(bab|a(bb|ba))b)a)|b(a(((a|b)(ba|aa))b|(bba|(ab|b(a|b))b)a)|b((((a|b)b|aa)a|(ab|b(a|b))b)b|abba)))b)
90: (ba|aa)
33: (((b(ab|bb)|a(bb|ba))a|babb)a|(a((a|b)(ba|aa))|b((ba|aa)a|((a|b)a|ab)b))b)
16: (b(bb|aa)|abb)
72: (aab|b(ab|aa))
106: (a(b(ba|aa)|abb)|b((ba|aa)b|((a|b)b|aa)a))
119: (a((ab|aa)a|(aa|b(a|b))b)|b(b(bb|aa)|abb))
113: ((ba|ab)b|bba)
18: ((b(ab|bb)|a(bb|ba))a|babb)
41: ((aba|(ba|aa)b)b|(aab|b(ab|aa))a)
68: (b((((bbb|aaa)a|abbb)b|((aba|(ba|aa)b)b|(aab|b(ab|aa))a)a)b|((b(a(ab|bb)|baa)|a(b(ba|aa)|a(bb|aa)))a|(((a|b)(a|b)a|(bb|aa)b)a|((ab|b(a|b))b|(ab|aa)a)b)b)a)|a(a((b(a((a|b)a|ab)|bbb)|a(a((a|b)b|aa)|b(a|b)(a|b)))b|(a((ab|aa)a|(aa|b(a|b))b)|b(b(bb|aa)|abb))a)|b((a((ab|b(a|b))b|(bb|ba)a)|b((ab|bb)b|(bb|ba)a))b|(a(b(a|b)(a|b)|aab)|b(aaa|b(ab|aa)))a)))
6: (baaa|(bab|a(bb|ba))b)
57: (a(((a|b)(ba|aa))b|(bba|(ab|b(a|b))b)a)|b((((a|b)b|aa)a|(ab|b(a|b))b)b|abba))
5: ((a|b)(a|b)b|(ab|aa)a)
47: ((b(a(ab|bb)|baa)|a(b(ba|aa)|a(bb|aa)))a|(((a|b)(a|b)a|(bb|aa)b)a|((ab|b(a|b))b|(ab|aa)a)b)b)
124: (((a|b)b|aa)a|(ab|b(a|b))b)
94: (a(b(a(b(bbb|a(a|b)(a|b))|a((ba|ab)b|bba))|b(((a|b)(ba|aa))b|((ab|aa)a|(aa|b(a|b))b)a))|a(((b(ab|bb)|a(bb|ba))a|babb)a|(a((a|b)(ba|aa))|b((ba|aa)a|((a|b)a|ab)b))b))|b(a(b(a((a|b)(a|b)a|(bb|aa)b)|b(aba|bbb))|a(a((aa|b(a|b))b|((a|b)b|aa)a)|b((a|b)(a|b)a|(bb|aa)b)))|b(a(a((aa|b(a|b))b|((a|b)b|aa)a)|baab)|b(b(aab|b(ab|aa))|a(baa|((a|b)a|ab)b)))))
39: "a"
1: (a((a|b)a|ab)|bbb)
117: (ab|aa)
42: (((b(a(((bb|aa)b|bba)a|bbbb)|b((ab|b(a|b))(a|b)b|(a(ab|b(a|b))|b(ba|aa))a))|a(a(a((a|b)(a|b)b|(ab|aa)a)|b(b((a|b)b|aa)|a(ab|aa)))|b(a(((a|b)b|aa)a|(bb|aa)b)|b(b(ba|aa)|abb))))a|(a((b(b(a|b)(a|b)|aab)|a(bbb|a(a|b)(a|b)))b|(baaa|(bab|a(bb|ba))b)a)|b(a((a|b)(ba|aa)b|(bba|(ab|b(a|b))b)a)|b((((a|b)b|aa)a|(ab|b(a|b))b)b|abba)))b)a|((a(b((a(ab|aa)|b(ab|bb))a|(b((a|b)b|aa)|aab)b)|a(a(b(ba|aa)|abb)|b((ba|aa)b|((a|b)b|aa)a)))|b(((b((a|b)b|aa)|aab)a|((ab|bb)b|((a|b)b|aa)a)b)a|(a(abb|bba)|b(aba|(ba|aa)b))b))a|(a(((b(ba|aa)|a(bb|aa))b|(b(ba|aa)|abb)a)a|(a(bba|bab)|b(aaa|b(ba|aa)))b)|b((b(((a|b)a|ab)a|(a|b)(a|b)b)|a(b((a|b)a|ab)|a(ab|b(a|b))))b|(((ab|bb)b|((a|b)b|aa)a)a|(a(bb|aa)|b(aa|b(a|b)))b)a))b)b)
19: ((b(b(a|b)(a|b)|aab)|a(bbb|a(a|b)(a|b)))b|(baaa|(bab|a(bb|ba))b)a)
26: ((b(ba|aa)|a(bb|aa))b|(b(ba|aa)|abb)a)
96: (a(b((a(ab|aa)|b(ab|bb))a|(b((a|b)b|aa)|aab)b)|a(a(b(ba|aa)|abb)|b((ba|aa)b|((a|b)b|aa)a)))|b(((b((a|b)b|aa)|aab)a|((ab|bb)b|((a|b)b|aa)a)b)a|(a(abb|bba)|b(aba|(ba|aa)b))b))
38: (a((aa|b(a|b))b|((a|b)b|aa)a)|baab)
63: (b(a((a|b)(a|b)a|(bb|aa)b)|b(aba|bbb))|a(a((aa|b(a|b))b|((a|b)b|aa)a)|b((a|b)(a|b)a|(bb|aa)b)))
95: (b(a|b)(a|b)|aab)
55: ((ab|b(a|b))(a|b))
14: (((bb|aa)b|bba)a|bbbb)
40: (a((a|b)(a|b)a|(bb|aa)b)|b(aba|bbb))
31: ((b((((bbb|aaa)a|abbb)b|((aba|(ba|aa)b)b|(aab|b(ab|aa))a)a)b|((b(a(ab|bb)|baa)|a(b(ba|aa)|a(bb|aa)))a|(((a|b)(a|b)a|(bb|aa)b)a|((ab|b(a|b))b|(ab|aa)a)b)b)a)|a(a((b(a((a|b)a|ab)|bbb)|a(a((a|b)b|aa)|b(a|b)(a|b)))b|(a((ab|aa)a|(aa|b(a|b))b)|b(b(bb|aa)|abb))a)|b((a((ab|b(a|b))b|(bb|ba)a)|b((ab|bb)b|(bb|ba)a))b|(a(b(a|b)(a|b)|aab)|b(aaa|b(ab|aa)))a)))b|(a(b(a(b(bbb|a(a|b)(a|b))|a((ba|ab)b|bba))|b((a|b)(ba|aa)b|((ab|aa)a|(aa|b(a|b))b)a))|a(((b(ab|bb)|a(bb|ba))a|babb)a|(a(a|b)(ba|aa)|b((ba|aa)a|((a|b)a|ab)b))b))|b(a(b(a((a|b)(a|b)a|(bb|aa)b)|b(aba|bbb))|a(a((aa|b(a|b))b|((a|b)b|aa)a)|b((a|b)(a|b)a|(bb|aa)b)))|b(a(a((aa|b(a|b))b|((a|b)b|aa)a)|baab)|b(b(aab|b(ab|aa))|a(baa|((a|b)a|ab)b)))))a)
24: (ab|bb)
86: (a((a|b)b|aa)|b(a|b)(a|b))
122: ((ba|aa)a|((a|b)a|ab)b)
97: ((ab|aa)a|(aa|b(a|b))b)
23: (a((ab|b(a|b))b|(bb|ba)a)|b((ab|bb)b|(bb|ba)a))
107: (a(a((aa|b(a|b))b|((a|b)b|aa)a)|baab)|b(b(aab|b(ab|aa))|a(baa|((a|b)a|ab)b)))
88: abb`.split('\n').map(rule => {
    return {
        id: Number(rule.split(': ')[0]),
        regex: rule.split(': ')[1]
    }
})

let msgs = `aaababaaaaaabbbaaaabbaaa
aaaabbbaaaaaabaaabbabaabbbbaabaaabbbababbbbabbabababaaaa
aabaababaabaaaaabbbbbbbbaaabbbaabababbabbaababaabbbabbabaababaaababaaabaaaabaaab
ababbabaabaaaabbbbbbaaabaabbbaabbaaaabbababbaaaaababbbbb
aabbbababbabbbbaaaabbaba
baababbaaabbbabbbbbaabbbbaabbaaaaabbbbab
aaaabbbaaabbaabbbaabbabb
baaaabbbabaaabbbbbabbaabbbaabbabbbbaababaabbbbabbababababbaaabbb
aabbbababbbaaabbbabbbbba
abbabbaabaabbbabbbaabaaaabbbbbaabbaaaabb
abbabbababbaaaaaababaaaaababaabababbabaaabbababa
abaaaababaaaaababbaaaabbabbbabaabbaababbabbaabbaababbbaa
bbbaabbbaabbabbbaaabaaba
bbababaababbbabbbbaaabab
bbbbbabbbbbbbbaaabbabbbaaaababaaabaaabab
babbaaaabaaaaabbbbababaabababbbababaaaba
abbaabababbabbaabbbbbbbabbbbbabaaaababbb
aabaaaabaabbbbaaaaabaaaa
aaabbbaaaabbabaabbabbbab
abbabbbaaabaabaababaabbbbaaabbaaaaabbbab
aaabaaabaaaabbabbbaaabaa
bbaabbabbbbbbbbaabbbbaaaaaabaaababbababbbbbabbbbbababbaabaaaaaabaaaaabab
bbbaabaabbbbbbbaaaaabbbb
abaaaaabaaababbaaabababb
abbbbaababbabbbaaababbba
bbbababbaaaababbbabbbbaabbbbbbbababaaaba
abaabaabababbaaaabbbaabb
ababbbaaaaababbabbbbbbab
abbababbbaababbaabbbbbaa
bbaabbabbabbabababbbaaba
bbbaabaababaabbbbbababbaabaaaaabbabbababaabbabaabbaaabab
baaabaaaaabbbababbbaaabbaaabbbab
aabababaabbaababbaaabaabbbaabaaababbabaa
bbbbaaaaabaaaaaaababbbab
abbabbbabaabbbabaabbbbbb
abbbbbabaabaabaaabaaabab
bbbbbbaabbbabaabbabaabab
aaaabaaabbbbabaababbabaa
baabbbbbbbaabbabbbaababa
babbbabbabbbbaaaaaaabbaababbaabb
babbbaabbabaaabbbababbba
bbabababbabbbbaababaaaaa
bbbabbabbaababbbbbbaabaaabaabaaabaaababbbbbbbaaabbabaabbabbaaaabaabaabbb
bbaabbabbbabababaabaabaaaabaabaaabbaabbbbaabbaab
aaaabaaababbabbbbbbbaaba
bbbaabaabbabbaaabbbaabba
bbaabbbbabbaababaaaaabab
babababbababbbbaababbabaabbaaabbaaaabaaaababaaba
aababbbbbbaabbabbabbabaa
baaabaabaababaabbbaaaaaa
bbbaaabbbbaababbbaaabbab
aababbbbbbababbabbaabbbbbaabbabaaaabbabb
baaaabbabbbbaaabaabababb
bbabbaaabbabababaaaaaaab
bbbaaabbabaabbabaaaaabbb
bbbaaabbabbaababbbabbaab
aabbaababababbbbbaabbbaabbbabbbb
abbbbbbaaababaabbabaaaba
abaaaaababbbbaaaaababbab
baababbaaaaabbbaaabaabbb
aaababaaabbabbbababababaaaababaabbabbbbbaababaaabaaabbba
aabbaaaaabaabaabbbbbaaaaabbbaaaabbbbabab
bbaabbbbbaabaaabaaababbb
bbbbabaaabaaaabaabbbabaa
aabbabbbbbbbbaabbaaaaaaa
baabbabababbabbbaabbbabaabbabbbbbaabbaaa
baaabbbbabbbaaaabbababaababaaabbbabbaaab
babaabbabaabbbabbbababaabbbbbbbaaaababbabbababababbbaabbbbabbaabaaaabaab
bbabaaababaaabaababaaaab
abbaabbabbabaaaabaaaaabaaaaaabbaaaaaaaaa
bbababbbaabbbbaabaaabaabbbbaabab
bbaaabbbaaaabbaaabbaabbbbbaaaaaaabbabbbaabbaaababaaabbbbbbabbbbabbbaaabbbbaababaabaabaaa
babbbaaabbbaabbbbabbaaaabbababbbabbabbabaaaabbbbababaaaababaaaaa
babbbaaabbbbaabbbbbabaaa
babbbaababaaaabbaabaaabb
abbbbaaaabbaabbbaaaabbbabaabbabaaabbbbbbbaabaaaa
abaaaaaabaaabbbbabbababa
abbbbaabbaaabaaaaaabbaaa
bbbbabbabaababbaabbbbaabbbabbbaaaabaaaaaaabbbbbbaaaabababbabaabbbaabbaab
bbbbabaaaabbababbbabbbaabbbbbbbbaaabbbabbaaaabab
abaaaaabaabbabbbbbaabbba
babbabbbaaaaabbabaaaaaba
abbaabbbabbabbaabbabaabb
aabbabbbbbaaaaababbbaaab
bbbaaabaabbabbbabaabaaaaaaaaababbaaaabbabaaabbaabababbbaabbaabaaabbabaab
ababababbababaaaabaaababaaaabbbb
babbabaababaabaaaaaabbbbbaababaa
aabaabaabababaabbaaaabaa
ababaabbabaabbabaabbbabaabababbb
babaabbbaabbaabbbbbaaaba
babbbabbbbabbbbababbabaa
abbbabbaaabbbbbabbbbbaab
baaababbbabaabbbbbaaaaba
baaababbbbababaaabaabaaaaaaabaaabbbaaaaaaababbba
babbaabbaaababaaabaababb
bbabbababbabaaaaaaaabbbb
abaaabbbaabbbbbaaabababb
bbaaabbbbababaabaababbaa
aaaaaaabbabaababbbaabaaaaaababbaababbbaabbaabaaabbaababb
babaaabbbabbbaaaaabbbaababaabbbbbbaabaab
baaaaabbbbbaabaabaabbbba
babbbabbabbbabbbaaabbbab
bbbaabbbaabaaaaabaababba
bbbbbbbaabbaabbaabababbaaaaaaabbaabaabbaabababaa
aabbabaababbabababbabaaa
abbbbaaabbababababbabbbb
baaabaaaaabaabaabbaabaab
baaaaabbbaabbbbbaaabbaaa
baaabbabbbaaaaaabbaaaaabababbbabaaabbaaababaaaabaabbbbababaabbab
aaabbbbababbabbaaaaaabab
abbabbabaaababaaaabaababbabaabbb
bbabbbbaabaababbbabbabbabbaaaabb
aabbababaabbababababaaaa
babbbbaabbabbbaabbbaaabb
aaaabaaabbababaababbabaa
babaaabbababbbaaaababbab
aaaabaabbabbaaaaaababbaabababaab
abaababbbbbaaaaababbbbbb
abaaaababbbbbbbbbaaabbaa
babbbbaaaaaabbaabbbababa
bbabababbbabbbbaabababba
abbbaaaaaabbaaaabbabbaab
baaabbbbbaabbbabbbabbabaaabbbbbabaaababbababaaaa
bbbabbbababababbbaaaaaaaabbbababbaaaaabbbabaabaaaaaaaaab
ababbaaaaabbbbbbabaabbbaababaaabaabbabbbabbaaaab
aabaaaabababbababaabaaaa
babaabbbbabbbabaabbabaaa
baababbbbbbbbabbaabaabba
bbbbaaaaaaabaaababbaaaaa
aabaabaabbbbaabbbbbaabba
bbbbbaababaaaaaaaaaaaaab
abaaaaaaababbbaaabaabaabbbababbaabbbbaaaabbabbbbaabbbbbb
babaabbaaabaaaaaaaaaabab
bbababbaabaaaabaaaabbaba
abaabbbbbaabbbbaaaabbabbbbabbaabaabbbabbabaaaabb
aababaababbbbbbaabbbaabb
baababbbabbbbbbaabaababa
aaaababbbaababbababbbbab
bbabaaaaabbbbbabaaabaaabaaababaaaabbabba
abaaaaabbaaaabbabbbabaaa
abbaababaabaaaaabbababbbabbbababaaaabaabaaababab
babbbbaabbabaaabbbababbabaabbabaabbaabaabbabaabb
aaababbaaaaabbababaaabaaabbbbbbb
abaaabbbbbaaabbabaabaaaa
bbbaabbbbabbaabbaabaabbb
babbaababaaabbbbabaabaabbbabbbaabbababbbabbaaabbbbabbbabbabbbbbb
bbaababbbbaaaaabbbabbbbabbbabbbbabbaaaaa
bbbabaababaababbbaaaabbb
abbaaaaabaabaaaaabbaabbbbaaabbbabaaabbbabbbbabaaabaababbbbaababa
baaaaabbabbbabbaaaaabbbb
aabaaaabbaabaaabbabbbbab
bbababbabbbbaaabbababbbbbbbbaaaabbbaaabbbbaaabaabbbaaaba
aaaaaaaababbbaaabaaaaaab
abbabbbaaaaabbaaaaaaabbb
aaababaaaabbaaaaaaababaabbbababa
aaabaaabbabbbabbaabababb
bbabbbaaababbaaaaaaaaaba
aaaabbbababaabbabaabaaabbbbabbbaaaabbababbaaaabbaaaaaaba
bbbbabaabbbbaabbbaaabaabaaaaabaaaaabbbab
bbbbaaaaabaabaabbabbbbba
abbabaabaabaabaabbaabbba
abaabbbabaaababbbabaabbbaabaaaaabaaaaaaa
abbaababbaabbbbbaaabaaba
babaaabbaabaaaaaababaaaa
baaabaaabbababbbbbaaaabbbaabbbba
bbbbbbbbabaaabaaaaabbaaa
aaaabbabaabbbabbaababaabbabbbbabbbabaaba
bbaababbbaaababbabbbabbbaaabbbabbbbaaaba
bbbabbbababababaaabababb
aabbabbbaabbaababababbaabaabaaaaaaabbbbb
aababababbbbaabbaaabbbab
aabbaaaaaaaaaaaaabbbbaba
aaaabaaabbbbabbaaabbababbaaabbbabbbaabab
bbaabbabaabbbbaaabaabbaa
bbaaabbbbbabbbabbaabaaaabbabaaba
abbbbaabbabbbbaabbbaabba
bbabaaaaaaaaabaaababaabb
baabaaababaaaaaabbababaa
abaaaababaabbbabbbbbbaaa
baabbababbbababbaaabbaabababbaab
abbabaabbabbaabbbaaabbba
abaabaabababbabaaabababb
aabaabaaaabaaaaaababbaab
abaaabaabbabbbaabbaabbba
bbbbaaabbaaabbbbababaaaa
aaababbaabaabbbabbababababaabbab
bbbaabbabbbbbbaabbbbabaaaaaabbbabbbbababaaabbabaaabaaabaababbaabaaababab
baaabaabbaababbbabaababbabbaaaba
bbbaaabbabaabaababababbb
bbabababaaabbaababbabbbb
aabaabaaabbaabbabaababab
bbbabbaaabbbbbabbabbaabbaabaaabb
baaabaabbbaabbabbabaaabbaabaaabb
aabaabaabbbabaabaabbabaaabbaaabbaaaaaaab
ababbabaaabbababbbabbbab
babbbbaaaabbabababbbaaaaababbaab
aaaabaaabbbbabbaaabaaaaaababbbbbbbaaaaaa
bbbbaaababbbbaabbbbbbbab
bbbaabaabaabbbbbaabaaabb
aaaabbabaaaaabaaabaaabab
baabbbabbbbbabbaababbaab
babbbabaabaaaabbbabbbbba
bbbbabaababbbbaabbaabaaa
aabbababbbaabbbbbaaabbbbabbaaaaabbaababbaaaabbab
bbaabbbbbbababbababaabab
bbababbaabbababbbabbbbab
ababbbbabbabbbabaaabbbabaabbaaab
bbabbbaabbabbbabaaabbbbbbabaabbbaabaaabbababaaaaaaaaababbaaaaaaa
aabaabaaabbabbbaabbbaaba
baaabbbbbbabbbbaaaaababa
babbbaabbaaababbabbbbbbb
bbbaaabbbbabbbbaabbabaaa
bbbabaababbaababbabbbaababbabbaabbabbabb
bbaababbbbabababbbabaaba
bbbbbbaaabbaababbbbabbbbbaababaa
aaababbabbababbabaaaabbb
aababbbbbaaaaabbbaaaaabbbbbaaabbaabaaabaabaabbaabbaabbba
babbabbaababaaaaaababbaabbaabbabaaaababaababbaab
abaababbbaaababbbababaaa
bbbbbbbbababaabbabababaaaababaabaababaabbaabaaababaaaababbaabbaa
bbaabbbbaaabbaabbaaaaaba
bbababaabaabbbbbbaababaa
abbabbbbbbababaaaabbabbbbbababaabbabaabbbbabbbbbabaabbbb
bbabaaababbbbaaabbbabbabbabaabbababaabba
aaaaabaabbbbabbabbaababa
abaabbabbbbabaabaaaaaaaaaababbab
aaaaabbaaaabbaababbabbbaababbaaababaaabbabbbaaab
aabbabbbbaaabbbbabaaabab
babbababaaaabbbaabbbbbaa
aaaabbababbabbbababbbbba
babaaaabbaaababaaabaababbbaabbabbaaabaaabababaaabaabbabbbaabababbbbababbabbaabaabaabaaba
babababaabbababbaababbaa
abaabbbaaaaabbabbbbaabab
abaabbbaabbbbaaaaababbaa
bbabaabbaabaabbaabaabbaa
aaababaaabbbbaaabbaaaaaa
bbbabbabbaabaaaaaabbbbababbabbbb
bbbbbbbabbbaaabbababbabaaabbabbbbbbaabaaabababbbaaabbabb
bbbaabaaaaaabbaaaaaaabab
abaabababababaabaababbabaaababaabbabaabbbbbbbbba
aabbabaaaabbaaaababaaaaa
abbaabbaabbbbaaaababaabb
babbabbbbbbbbbbbabaabbaa
bbabbbbababaaabbbbbababa
bbbbaaababaabbabaaabbabb
aaaabaaabbabaaaaaaabbabb
abbaaabbaaababbaaaabbbaabbbaabaaaabbaababababbbbabbbbbbaaaaaaabbbabbababaaaaaaaabbbaaababbbbbaab
baabaabaabbabbabbbbaaababbabababaababbabbbbaabaaabababaaabababbabbabbaaabababbbbbbbbbbbaaabbaaba
abbabbbbabbaaaababaaaaabaababbaabbabaaabaabbabbbabbbaabbaabbaaab
bbabbbbaaabbbabaabaabaaaabaaabab
babababababbbabbababbabaabaabbbabbaaabbb
abaaaabbaaabbbaabaaaabaa
bbaabaaabbaabbabaabbaaab
bbbbbabbbaaabaabbbaabbbbaabbbaabbaaaaaaabbaabaab
bbbbabbaaabbabbbaaabbbab
aaabbbbaaabbaaaabbbaaaaaaaabbbbababaaabaababbaab
bbbbbbbbbbbaabaabaaabbba
abaaaabaabaabaaabaaabaabbababaababbaaaababbabbbbabaaabba
baaabaabbababaabbbbabbbbbbbabbbbaaabbbab
aaabbbbaabbabaabbbabaaabaaabbaababbbaaba
bbbbaabbaabaabababaaabab
aaaaaaaaabbabbabababbbba
bbabaaaaaaaabbababbbaaba
babbabababaaaabbaaabbbaaaabbbabaaabbbbaabaaababbaaabbaba
aaabaaabbabbaaaaabbaaabb
aabbbaabaabaaaabbaababab
bbaabbbbbabbbabbbaabbbaa
bbababaaababbaaabaabbaaa
baaaabbabbbbabbbaaaaabab
abaabaaabbbbbbaabbaaabaa
babbaababbaabbbbbaabbababbabbbaababbbbba
bababababbabababaaaaabbb
aabbbbaabbbabaababababba
babaaabbaabbbabbbbabbbbbabbabbbababaabaa
baaabbbbbaaabaabababbbbb
baabbbbbbabbbaababaaabba
bbbbababbababaabbbabbbaaaaabaabaababbabbbaabaaaabaabaaaaabbbabbaaaaabbab
aaabbbaaabaabaababbabbbaaaaaabbabbbabbabaabbabbbaaaabaabbbabbaababbaaaab
abaabaabbabbaaaabbbaaaab
bbabbbababbbabaaabaaaaab
aaaabaaabbababaaabaababa
aaaaabaababbbabababaabaa
bbaaababbbaabbabbabaabbababbbaaa
abbaababbaabbabaaabaaaaa
aabbabbbbaaababbbbbbaaabbbbaabaaaababaababbababa
babbabbaabbaababbabaaaab
bbbbbbbaaabbabababababaaabababab
abbbaaaabaaaabbabaaabaaabbabaaaaaabbabbaaaabababaaaabbbb
babbbabbabbabbabaabbaaab
abaaabaaaabbababbbbbbaaa
bbbabbbbabbbbbbabbabaaba
bbbabbaaaababaabaabbbabaabaaaabbbbabbaaa
bbabaaabbbbababbaaababab
aabbbbbabababbbbbbaaaabb
abbabbabbbababaabbbbaaba
abaabaabbbaaaaabbabbbbaaabbababbbabaaabaaaabbaba
bbbabbbaaaabbbaaaaaaaaab
abbbbaabbbbaaaaaabbababa
ababbaabbbbaababbbaaabaaabbabbbabbbaababbbaabbba
babbabbaabbbbbbabbbabbbbababaaabbaaabbab
aaaabbaabbabbbbaaaaaaabb
bbbababbbbbbabaababbabaaaabbaabbbbbbbabbaabbbaabbaaabbababbbabbababbbabaaaabbbaabaaaabba
babbbabaabbaabbabbabbaaabbaaaaaaabaabbbb
babababaaaaaaaaabbbbbaaa
bbaabaaababaaabbbabbaabababaababbbbbabbb
baaababbbbbbaaaaaabbaaaabaaabbab
bbbbbabbaabbbaabaabbbaaa
bbbbabaaabaaaabaaaabaabb
babbaaaaaabaabaabaabbbaa
aabbbbaaaaaaaaaaaabbaabbbaaaaaba
aaabbbaaaaaabbbaababbabaaaaabaab
abbaabbabbabaaaaaabbaaba
ababbababbbabbbaabbbaaab
aaabbaabaaaababbaaaabbaaababaabbbabbbbbb
abbaabbaabaabbabbaabbabb
baababbbbbbaaabbaaabaaba
babbaaaababaabbabaaaaababaaababbaaabbaaa
bababbbbbbbabbbbbababbaa
bbaabaaabbababaabbabbababbabbaba
aaababaabaaababbaaaabbabbaaaaaab
bbaabaaabaaaabbabbbabbaaaaabbbbbaababbba
aaabaaabbbbabbaabbaaabaa
baaabaaaabaaaabbaaabbaaa
aabababaaababaabaaabaaba
bbababbbaabbabbbababbabaabbaabbabbabbabaabbbabab
bbbabbbbbbaabbabbaaabbaa
babbbabbaabbbaabbbaaaaaa
aabbabbbaaaaabbaababbbab
bbbbabbabbbbbaabaabbbaaa
abaabaaaaaaaaaaaabbbbbbaabbabbaabaaaaaaa
abbaabababaabbbabaaaabaa
aaaabbbaaabbabaaaaabbaaa
bababbbbbbabbbbabababbaa
bbbbaaaabaaaabbabbaaabaa
babbaababbbbaabbbaaaaaaa
bbbabbaabbababbaabbbbbaa
babbabbbbabbabbbbaabaaaa
abaabaaaaababbbbbaaabbba
bbabbbababbbbbbabbabbbababababaabbbbaaaababbbbbaaababbbabbbbbabaaabaaaaa
aaaaaaaaabbababbbaaabbab
baaabaaabbabbbbababaabaa
bbabbbbabbbbaabbbaaaaaab
bbaababbabaaabaaabbabbbbbabbaaab
bbbabaabaaabbbaaaabaabbb
aaaaabbbbbaaabaaaabaabbb
abaaabaabbbaaaaaabbbaabb
bbababbbbabbabbabbaaaaba
aabaaaabaaabbbbaaaaabbaaaababababbbbaaabbabababb
bbaaaaaabbabbbababbababa
aabaabaaabbbabbbaabaaabb
bbbbbaabbbbaaabbaabababb
bbbbbaabbbbbbaabbabbbbbb
bbaaabbabbbbbaabababaaaa
babaabbaaaaaaaaabbaaabbbaabaaaabbbbaabbb
baabaaabbbbbbaabbbbbabbb
baaababbbabbababbabaabab
aabbabaababbbabbbabbbaaaaaabbabaabaaabab
bbbbabaaabbabbabbbbaaaba
aaabbaabbabaabbaaaaaabbabaaabbab
abbbaaaaabbaabbbbbbbabababaaababbbabaabb
aaaaaaaababaaabbbabbbbba
abbabbaabbaabaaabbabaaba
abaabbbabbbaaabbbabbaaaabbabbababaababaabbaabaabbaaaabaa
aaaaaababaabbaaaaaaaaaab
aaababaaaabbabbbbbaaaaaa
aabbababaabbbaabbbbbbbab
bababbbbbabababaaabbabba
abbbabbbbaaababbbbbbbbab
bbaabbbabbaabaaababbaabbbababbabbbabbbabbaabababaabbbaaaaabaabababbbaaaaabbabaaaaaabbaaa
babbbaaaabbbabbabaaabbba
bbbaabbbabaaaabaaabaabbb
aaababbabbbababbbbaabbba
abaaaabaaabbabaaaabbaabbbaaabbbbbabbabaaabbbabaa
abaabbbabbbbbabbbbbababa
aabaabaaabbababbaaaabbabbaabbbaa
abbabbaabaaabaabbababbab
babbaababbabbbbaaabbbaabbbbaaaabaaababbb
bbbaabbbbaaaaaaaaabababbbaabbbba
babbbbaaaaaabbaabaaabbaabbabaaaaaaabaaaa
bbbabbababbabaabaabbbbbb
bbabbbbaabaabbbabbabbabb
bbabaaabbaabbbbbabbabbabbaaababbbbbababa
baaabaabaabaaaabaaaaaabb
aaaabbbaabaabaababababab
bbabbababbbbbbbabbbbabab
babbbabbbaaaaabbbbbbabbb
baaababbbbaaabbaabababaa
babbabbaaabbaabbabbabbbb
aabbbababbabbaaaabbaaaba
ababbaaabbbabbabbbabaabb
bbaabaaabbbbbaaabaaabbaabaabbbbaabbaabaababbaabbaaaaabbbaababaabaaaaabaaaabbaaab
babaaabbabaaabbbaaabaaba
babaabbbbabbaabbaabbabaabbbbaabbaaababbbbbbaaaabaabaaabb
aaababaaaabbabbbbaabbaab
abbaababaaaababbaaabbbbbbababbbabbbbabaababbaabbaabaaaaa
aabbaaaabbabbbbbaaabbbab
babbaabbabaaabaabaabbbabaaabbbbbabbaaabaaaabbbbb
aabaabababbaabbaabbbbbaa
aabbabaabbbaaabbbababbba
aabbabaabbbaabaaabbbbbaa
bbbbaaabbbabbababbbabaaa
aabbbbbaaababaabbbaaaaaa
bbbababbabaaaabbaaaaabbb
abaaaaababaaabbbaabbbbab
bbabbabaabaaaaabbaabaaba
bbaaabbbabbbabbababbbaababaabaabbaabbaaa
babbaaaabaabaabaabbbaaaaaaabbabbabaabaaaabaaabaabaababaaaaaaaaaa
abaabbabaabaabaababbbbaabbbabbaabbaabaaabaababab
baabaaabbbaabbbbbbaaaabb
aaaaabaabbaababbabaabaaaaababbab
aaaabaaabbaabbbbaaabbbbb
ababbbaaabaabbabaaaabaaabaaaaabbababbabaaaabbabbaabaaabbbbbababa
aaababbaaaabbbaaaabaaaaaaaababaaabbbaabbbaaaaaaabaaaabaa
aababbbbaabbbabbabbabbaababbabbababaabaa
aabbbbbabaaabaaabaaababa
bbbaaabbbaabbbabbbbababa
aaaaaaaababbbabbaabaabbb
aabababaaabbbbbabbaababa
abaabbabbabbbaabaaabaaba
bbabbbbaabaaaaabbbbababa
aababaababbbbbabbaabaaabbbbaabaabbabbabb
aaabbbbabbabbabaaaababbb
babbababaabaabaababbbbab
baaaaabbaaaabbaabaaaabaa
bbaaabbaaabbbaabababbababbbbbaababababba
abaabbaabaabaaababbbbbbbbbbbbbabbbbbabba
abbabbbabaaaabbabaaaabaa
bababbbbaabbabaabbabbbab
bbbabaababbabaabaababbab
bbbabbbababbbaaaaabaaaba
aaaababbaaababaaaaaaaabb
abbaabbbbabbabbbabbaaaaa
abbaabbbbaaabaabaabbbababbaaabaababbaaababbbbbaa
bbbabbbbaabbaabbaaaaaabb
bbabbaaaabaaaaabaaaaabbabaaaaaabaaabbbab
aaabbaababaaaaabaababaaaabbaabaa
babbaabaabbabbaaaaaabbbb
abaabbabaaaabaaabaabaaaa
baabbabbabbbababbabbbabaabbbbaaababaababbbabaabaabbaababbbbabbabbbbbaaaaabbabaaa
babbababbbbbaaaaaaabbaba
bbbbbaabaabaaaabaabaaaabbbababbbaaabbaab
baabbbababaabaaaaabbabbbaababbbbaaababbaabbabbabbabababbbabababbbbbbabababaabbaa
aaabbaaaaaabbababbbbbaabbbabbbbbabbaababbbabbbabbaaabbabbaaabbbaaababbaa
bbabaaaabbababaabaaabbbbabbabbbb
aaababbaaabaaaabbbaaaaba
abbabbabaaaababbaabbbaaa
bbbaabbbbabbabbbbbaaabaa
babbbabbababbabaabbbabab
bbbaabaabaaabbbbbababbba
bbabbbbababbbabaabbaaaba
bababababbababbbbaabbaab
baabbabaaaabbbbbbbbbbaba
baababbbbabbaabaabbabaabaabaaaabaabababb
bbababbabbaaababbaabbbaa
babaabbaaabaabaaabbbaaab
bbaabbabaaababaaababaaba
bbabbbbababbabbbabbbaaab
bbbaabbbaabaabaaabbabbabbabbaaaababbabbbbaaaabababbbaaba
bbababbaabbbabbabbababbaaaaabaab
baababbabbababaabbaaaaabbaaababbababbabb
bbababbabbaabaaabbaaabaa
abbabbbababaabbbabababaa
bbbbaaababbabbbabbabbabb
aabbaabbaaaababbababaaab
bbaaabbabaabbabaabbbbbaa
abbbbbababaabbabaaababbabbababbaababaabaabbbaabb
bbbabbbbbbaaaaaaaaaabaababababbb
bbaabbabababbbaaabababba
bbaabbabababbaaabaaaabaa
aabaabaaabaaaabbbbaabbba
baabbabaaabbabbbbabbbbaaabbaaabbababaaaa
bbaaabbabbababbbababbaab
aabbaabbbaabbababaababbbabbbabab
aaaabbabbabbbaaabbbbbabbabaaaaabbababbbaaaabbbbb
aabababaabaababbbabababaaabbabba
bbabbbaababbbbaaaaaaabab
aabbaabbbbbaaaaabaaaaaaa
abbabaabaabaaaaaabaaabab
bbabaaaaabbbbaaabbbbbbaaaabbabbbaababbaa
abbabbaaaaaaabbabbbababbbbbbbbbbbababaabaabbbabbbbbababa
abbbbbabaaaaabbaabbababa
aababababbaaaaababbbabaa
bbbaaaaabababababaabaaaa
babbbabbbabbaabbbabbbbab
aaaaaabbabaaaaabbaabbaabbbababaa
bbbbaaabaabbababaabbaaba
abaabbbabbbaabaabaaababa
babbabbbbaaababbabbbbabb
aabbbbaabbaabbbbabbababbabbabbabbbaaabbabbbbbbbbaaaaaaab
baabaaabbbababbbbbbbbbabbbaaaaaa
aabaaaaababaabbbabbbbaabaabaabaababbabbbbabbbbaaabbbaabbaaaabaabbaabaaba
ababbababbbbbbbbbabaabab
abaaaaaaaabaaaabbbaaaaba
abaaaababaabaaabbbaabbaa
bbababbaaaabaaabbaabbaab
babbaaaaabaabaababbbbabb
abaaaaaaaaababaaabbbaaaaabbababbabababbb
aaaaaaaababbabbbbbabbbab
abbbabbbbbbbbbaaababbabaabaabaaaaaaaaaababbabbbb
abbabbaaabaabbbabbabbaab
abaabbabbaaababaaabaabbbbababbbbaaaabaaa
abaababbbbabbbbaababbabb`.split('\n');

let tRules = `0: 4 1 5
1: 2 3 | 3 2
2: 4 4 | 5 5
3: 4 5 | 5 4
4: "a"
5: "b"`.split('\n').map(rule => {
    let t = rule.split(': ');
    let val = t[1].split(' | ').map(v => v.replace(/["]+/g, ''));
    return {
        id: Number(t[0]),
        val: val.map(a => a.split(' ').map(Number))
    }
});

let tMsgs = `ababbb
bababa
abbbab
aaabbb
aaaabbb`.split('\n')

module.exports = {rules, msgs, tRules, tMsgs, parsed};