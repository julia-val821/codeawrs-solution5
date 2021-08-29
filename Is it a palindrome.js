https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

    function isPalindrome(x) {
        x = x.toLowerCase();
        for(let i = 0; i < x.length; i++){
            if(x[i] != x[x.length- 1 - i]) return false;
        }
        return true;
    }