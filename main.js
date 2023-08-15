"use atrict";

// Get all posts
// $.ajax({
//   method: "GET",
//   url: "https://jsonplaceholder.typicode.com/posts",
//   dataType: "json",
// }).done(function (data) {
//   const postBody = data.map(
//     (item) => `<h5>${item.title}</h5><p>${item.body}</p>`
//   );
//   $("#result").append(postBody);
// });

// Get only the first 20 posts
$.ajax({
  method: "GET",
  url: "https://jsonplaceholder.typicode.com/posts",
  dataType: "json",
}).done(function (data) {
  let slicedData = data.slice(0, 20);
  const postBody = slicedData.map(
    (item) => `<h5>${item.title}</h5><p>${item.body}</p>`
  );
  $("#result").append(postBody);
});

// Post new post
$("#new-post-form").submit(function (e) {
  e.preventDefault();
  let title = $("#title").val();
  let text = $("#text").val();
  let url = $(this).attr("action");

  $.post(url, { title: title, text: text }).done(function (data) {
    $("#result").append(`<h5>${data.title}</h5><p>${data.text}</p>`);
  });
});
