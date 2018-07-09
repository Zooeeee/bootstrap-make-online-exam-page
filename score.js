$(document).ready(function(){
    $("#submit").click(function(){
        function blank(){
            let result = new Array;
            let a = $('.blank');
            for(i of a){
                result.push(i.value)
            }
            return result
        }
        function select(){
            let result = new Array;
            let a = $('input[name="select_one"]');
            for (i of a ){
                if (i.checked)
                result.push(i.value)
            }
            let b = $('input[name="select_two"]');
            for (i of b ){
                if (i.checked)
                result.push(i.value)
            }
            return result
        }
        function multi(){
            let result1 = new Array;
            let result2 = new Array;
            let result = new Array;
            let a = $('input[name="multi_select_one"]');
            for (i of a){
                if (i.checked)
                result1.push(i.value);
            }
            let b = $('input[name="multi_select_two"]');
            for (i of b){
                if (i.checked)
                result2.push(i.value);
            }
            result.push(result1);
            result.push(result2);
            return result;
        }
        function judge(){
            let result = new Array;
            let a = $('input[name="judge_one"]');
            for (i of a){
                if (i.checked)
                result.push(i.value)
            }
            let b = $('input[name="judge_two"]');
            for (i of b){
                if (i.checked)
                result.push(i.value);
            }
            return result;
        }
        function simple_answer(){
            return $('textarea')[0].value
        }
        function calculate(sub,answer){
            let total = 0 ;
            let error = '';
            for(let i = 0 ; i < sub.length ; i++){
                if (sub[i] == answer[i].value)
                    total += answer[i].score
                else
                    error += answer[i].id
            }
            alert("总分为："+total);
            if (error != '')
                alert("错误题目:"+error);
            else 
                ;
        }
        
        sub = blank().concat(select(),multi(),judge(),simple_answer());
        calculate(sub,correct_answer())

    });
  });