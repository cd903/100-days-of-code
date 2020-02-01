$(document).ready(function(){

    // Validation
    $('#currentWeight').on('change',function(){
        weight = $(this);

        $('#currentWeightError').remove();
        weight.removeClass('error-border');
        weight.removeClass('valid-border');

        if($.isNumeric(weight.val()) && weight.val() != 0 && weight.val() != ''){
            weight.addClass('valid-border');
            validWeight = true;
            return validWeight;
        } else {
            error = '<span id="currentWeightError" style="color:red;">Please enter a valid weight.';
            weight.parent().prepend(error)
            weight.addClass('error-border');
            return false;
        }
    })

    $('#goalWeight').on('change',function(){
        weight = $(this);

        $('#currentGoalWeightError').remove();
        weight.removeClass('error-border');
        weight.removeClass('valid-border');

        if($.isNumeric(weight.val()) && weight.val() != 0 && weight.val() != ''){
            weight.addClass('valid-border');
            validGoalWeight = true;
            return validGoalWeight;
        } else {
            error = '<span id="currentGoalWeightError" style="color:red;">Please enter a valid weight.';
            weight.parent().prepend(error)
            weight.addClass('error-border');
            return false;
        }
    })

    $('#consumed').on('change',function(){
        weight = $(this);

        $('#consumedError').remove();
        weight.removeClass('error-border');
        weight.removeClass('valid-border');

        if($.isNumeric(weight.val()) && weight.val() != 0 && weight.val() != ''){
            weight.addClass('valid-border');
            validCals = true;
            return validCals;
        } else {
            error = '<span id="consumedError" style="color:red;">Please enter a valid weight.';
            weight.parent().prepend(error)
            weight.addClass('error-border');
            return false;
        }
    })

    $('#exercise').on('change',function(){
        weight = $(this);

        $('#exerciseError').remove();
        weight.removeClass('error-border');
        weight.removeClass('valid-border');

        if($.isNumeric(weight.val()) && weight.val() != 0 && weight.val() != ''){
            weight.addClass('valid-border');
            validExercise = true;
            return validExercise;
        } else {
            error = '<span id="exerciseError" style="color:red;">Please enter a valid weight.';
            weight.parent().prepend(error)
            weight.addClass('error-border');
            return false;
        }
    })

    $('#gender').on('change',function(){
        gender = $(this);

        if(gender.val() !=''){
            
        } else {
            
        }
    })
    

})