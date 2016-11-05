describe("pow", function () {

    describe("возводит x в степень n", function () {

        function makeTest(x) {
            var expected = x * x * x;
            it("при возведении " + x + " в степень 3 результат: " + expected, function () {
                assert.equal(pow(x, 3), expected);
            });

            it("при возведении " + x + " в степень 0 результат: " + 1, function () {
                assert.equal(pow(x, 0), 1);
            });
        }

        for (var x = 1; x <= 5; x++) {
            makeTest(x);
        }

    });

    it("при возведении в отрицательную степень результат NaN", function () {
        assert(isNaN(pow(2, -1)), "pow(2, -1) не NaN");
    });

    it("при возведении в дробную степень результат NaN", function () {
        assert(isNaN(pow(2, 1.5)), "pow(2, -1.5) не NaN");
    });

    it("при возведении нуля в нулевую степень числа результат NaN", function () {
        assert(isNaN(pow(0, 0)), "pow(0,0) не NaN");
    });

});


//Решение
//Новый тест может быть, к примеру, таким:

//it("любое число в степени 0 равно 1", function() {
//    assert.equal(pow(123, 0), 1);
//});

//Конечно, желательно проверить на нескольких числах.

//Поэтому лучше будет создать блок describe, аналогичный тому, что мы делали для произвольных чисел:

//    describe("любое число, кроме нуля, в степени 0 равно 1", function() {

//        function makeTest(x) {
//            it("при возведении " + x + " в степень 0 результат: 1", function() {
//                assert.equal(pow(x, 0), 1);
//            });
//        }

//        for (var x = -5; x <= 5; x += 2) {
//            makeTest(x);
//        }

//    });

//И не забудем добавить отдельный тест для нуля:

//    ...
//    it("ноль в нулевой степени даёт NaN", function() {
//      assert( isNaN(pow(0, 0)), "0 в степени 0 не NaN");
//    });
//...