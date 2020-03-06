$('#example #date').each(function () {
    var formatDate = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }
      const tx = $(this).text();
      console.log('date : ' + tx);
      var date = new Date(tx);
      var test = date.toLocaleString('en-US', formatDate)    
      $(this).html(date.toLocaleString('en-US', formatDate));
});